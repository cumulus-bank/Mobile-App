import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { BookingPage } from "../booking/booking";
import { ListingService } from "../../services/listing-schedule-service/listing.component.service";
import { AlertController, LoadingController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public cards: any;

  constructor(
    public navCtrl: NavController,
    public listingService: ListingService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.cards = [
      {
        state: 'ON',
        logo: "assets/visa.png",
        a: 1234,
        b: 5522,
        c: 8432,
        d: 2264,
        expires: '9000',
        bank: 'Cumulus Bank'
      },
      {
        state: 'OFF',
        logo: "assets/american.png",
        a: 1234,
        b: 5321,
        c: 8283,
        d: 9271,
        expires: '8000',
        bank: 'Cumulus Bank'
      },
      {
        state: 'ON',
        logo: "assets/mastercard.png",
        a: 8685,
        b: 2445,
        c: 9143,
        d: 7846,
        expires: '7000',
        bank: 'Cumulus Bank'
      }
    ];
  }
  update(card){
    if(card.state=='ON'){
      card.state = 'OFF'
    }else{
      card.state = 'ON';
    }
  }
  
}
