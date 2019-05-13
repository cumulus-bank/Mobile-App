import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import {Provider} from '../../provider/provider'

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  public odm: any = [];
  public visaOffers:any = [];
  public masterOffers:any = [];
  public amexOffers: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public allservicesService: AllservicesService,
    public provider: Provider  ) {
  }

  call(){
    this.masterOffers = [];
    this.visaOffers = [];
    this.amexOffers = [];
    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe( data => {
      data[0]['Account'].forEach(element => {
        console.log(element)
        if(element['Activate']){
          if(element['AccountName']==='Visa Card'){
            this.allservicesService.odm('Visa','Gold',10517320,'','',[]).subscribe( visadata =>{
              this.visaOffers.push({
                type: 'visa',
                offers: visadata['creditCard']['cardOffers']
              })
              this.visaOffers = this.visaOffers[0]
              console.log(this.visaOffers)

            } , error =>{
              console.log(error)
            })
          }
            if(element['AccountName']==='Master Card'){
              this.allservicesService.odm('MasterCard','World',10517320,'','',[]).subscribe( masterdata =>{
                this.masterOffers.push({
                  type: 'master',
                  offers: masterdata['creditCard']['cardOffers']
                })
                this.masterOffers = this.masterOffers[0];
              } , error =>{
                console.log(error)
              })
          }
          if(element['AccountName']==='American Express'){
            this.allservicesService.odm('AMEX','Preferred',10517320,'','',[]).subscribe( americandata =>{
              this.amexOffers.push({
                type: 'amex',
                offers: americandata['creditCard']['cardOffers']
              })
              this.amexOffers = this.amexOffers[0];
              console.log(this.amexOffers)
            } , error =>{
              console.log(error)
            })
        }
        }
      });
    }, error => {

    })
  }
  ionViewDidLoad() {
    this.call();
  }

  doRefresh(refresher) {
    this.call();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
