import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Provider } from "../../provider/provider";
import { CheckinService } from "../../services/checkin-service/checkin.component.service";
import { BookingService } from "../../services/booking-service/booking.component.service";
import { LoadingController, AlertController } from "ionic-angular";
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import { ModalController, NavParams } from 'ionic-angular';
import {OffersPage} from "../offers/offers"
import axios from "axios";
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  public show: any = null;
  constructor(
    public navCtrl: NavController,
    public provider: Provider,
    public checkinService: CheckinService,
    public bookingService: BookingService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public allservicesService: AllservicesService,
    public modalCtrl: ModalController
  ) {}
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      this.show = dataID[0];
      console.log("data isssssssss",this.show)
      loading.dismiss()
    },(error)=>{
      loading.dismiss()
    })
  }
pay(id,price,product){
  let profileModal = this.modalCtrl.create(OffersPage, {userId:{ id: id,price:price,product:product}});
  profileModal.present();
}
  doRefresh(refresher) {

    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      this.show = dataID[0];
      console.log("data isssssssss",this.show)
      refresher.complete();
    },(error)=>{
      refresher.complete();
    })
    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 7000);
  }
}
