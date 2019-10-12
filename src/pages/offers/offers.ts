import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { BookingService } from '../../services/booking-service/booking.component.service'
import { EmailService } from '../../services/email-service/email.component.service'
import {Provider} from '../../provider/provider'
import { AllservicesService } from "../../services/allservices/allservices.component.service";

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  public data:any;
  pricing:any;
  public bill:any;
  public finalcredit:any;
  constructor(public allservicesService:AllservicesService,public navCtrl: NavController, public navParams: NavParams, public bookingService:BookingService, public alertCtrl: AlertController, public loadingCtrl: LoadingController,public emailService:EmailService, public provider:Provider) {
    console.log('UserId', this.navParams.get('userId'));
    this.bill =  this.navParams.get('userId');
  }
  cancel(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      this.data = dataID[0];
      console.log("data isssssssss",this.data)
      loading.dismiss()
    },(error)=>{
      loading.dismiss()
    })
    console.log('ionViewDidLoad OffersPage');
  }
  confirm(){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    console.log(this.pricing)
    let creditbalance = this.pricing.split(",")[1]
    let id = this.pricing.split(",")[0]
    console.log(creditbalance,id)
    let finalcredit = creditbalance - this.bill['price']
    this.finalcredit = finalcredit;
    console.log(finalcredit)
    let accountname = this.pricing.split(",")[2]
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    console.log(this.data['_id'],"my dataaaaaa")

    if(creditbalance>0)
    {
    this.allservicesService.bill(this.bill['id']).subscribe(data=>{
      console.log("billinnggggg", data);
      this.allservicesService.balanceUpdate(id,finalcredit).subscribe(databill=>{
        const billingdet = {
          "_id": this.data['_id'],
          "credit": this.finalcredit,
          "accountname": accountname ,
          "date": date
        }
        this.allservicesService.utilitybill(billingdet).subscribe(utilitybill=>{
          console.log('suucess')
        }, error=> {

        })
        this.allservicesService.addTransaction(this.data["_id"],this.bill['product'],this.bill['price'],id,accountname,"Bill",date).subscribe(dataID=>{
          const tempo = {
            "_id": this.data["_id"],
            "product": this.bill['product'],
            "price": this.bill['price'],
            accountname: accountname,
            Bill: "bill",
            date: date
          }
          this.allservicesService.ledgerfeed(tempo).subscribe(ledgerfeed => {
            this.navCtrl.pop();
            console.log('suucess')
          }, error => {
            loading.dismiss()
            this.navCtrl.pop();
            console.log(error)
          })
          // this.allservicesService.sms('Your '+ this.bill['product']+' bill has been payed. Current '+accountname+' balance is '+ this.finalcredit,'+971509786313').subscribe(sms=>{
          //   console.log(sms);
          //   loading.dismiss()
          //   this.navCtrl.pop();
          // },(error)=>{
          //   console.log(error)
          //   loading.dismiss()
          //   this.navCtrl.pop();
          // })
        },(error)=>{
          console.log(error)
          this.navCtrl.pop();
          loading.dismiss()
        })
      },(error)=>{
        console.log(error)
        loading.dismiss()
        this.navCtrl.pop();
      })
    },(error)=>{
      console.log(error)
      loading.dismiss()
      this.navCtrl.pop();
    })
  }
  else{
    console.log("no enough balance")
  }
  }
}
