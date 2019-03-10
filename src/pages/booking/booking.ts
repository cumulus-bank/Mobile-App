import { Component } from "@angular/core";
import { ActionSheetController } from "ionic-angular";

import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { BookingService } from "../../services/booking-service/booking.component.service";
import { Provider } from "../../provider/provider";
import { LoadingController } from "ionic-angular";
import { EmailService } from "../../services/email-service/email.component.service";
import { OdmService } from "../../services/odm-service/odm.component.service";

import { OffersPage } from "../offers/offers";
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-booking",
  templateUrl: "booking.html"
})
export class BookingPage {
  public data: any;
  public tx:any = null;
  public cardtype:any;
  gaugeType = "arch";
  gaugeValue = 0;
  gaugeLabel = "Amount";
  gaugeAppendText = "DHS";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public bookingService: BookingService,
    public provider: Provider,
    public loadingCtrl: LoadingController,
    public emailService: EmailService,
    public actionSheetCtrl: ActionSheetController,
    public odmService: OdmService
  ) {
    this.data = navParams.get("data");
    this.gaugeValue = 10000 - this.data['balance'];
    this.tx = this.data['tx']
    this.cardtype = this.data['acc']
    console.log("this is data", this.data);
  }

  ionViewDidLoad() {

  }
  ionViewWillLeave() {

  }
  cancel() {
    this.navCtrl.pop();
  }

}
