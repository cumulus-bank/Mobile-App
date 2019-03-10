import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { DashboardService } from "../dashboard/dashboard.service";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController, LoadingController } from "ionic-angular";
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import { Provider } from "../../provider/provider";
import {ContactPage} from '../../pages/contact/contact'
import {MapPage} from '../../pages/map/map'
import {AboutPage} from '../../pages/about/about'
import { HomePage } from '../../pages/home/home';
import { ChatPage } from '../../pages/chat/chat';
import { ShopPage } from '../../pages/shop/shop';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  @ViewChild(Nav) nav: Nav;
  public show: any = null;
  gaugeType = "arch";
  gaugeValue = 900;
  gaugeLabel = "Amount";
  gaugeAppendText = "DHS";
  private data: any;
  private slides: any = [];
  private start: number = 0;
  private end: number = 4;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dashboardService: DashboardService,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public allservicesService: AllservicesService,
    public provider: Provider,

  ) {
    this.data = [
      {
          id: 1,
          title: 'Current Account',
          country: '25,000 DHS',
      },
      {
          id: 2,
          title: 'Saving Account',
          country: '35,000 DHS',

      },
      {
          id: 3,
          title: 'Loan Account',
          country: '10,000 DHS',
      },
      {
          id: 4,
          title: 'Mortgage Account',
          country: '45,000 DHS',
      },
      {
          id: 5,
          title: 'Charity Account',
          country: '5,000 DHS',
      },
  ];
  }

  ionViewDidLoad() {

    this.getCurrentSlides();
  }
  navigate(page){
    if(page==='shop')
    this.navCtrl.setRoot(ShopPage);
    if(page==='map')
    this.navCtrl.setRoot(MapPage);
    if(page === 'bills')
    this.navCtrl.setRoot(AboutPage);
    if(page === 'credit')
    this.navCtrl.setRoot(HomePage);
    if(page === 'profile')
    this.navCtrl.setRoot(ContactPage);
    if(page === 'support')
    this.navCtrl.setRoot(ChatPage);
  }
  goback(){
    this.navCtrl.pop()
  }
  getCurrentSlides() {

    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    loading.present();

    if (this.start == this.data.length) {
        this.start = 0;
        this.end = 5;
    }
    this.slides = [];
    for (var i = this.start; i <= this.end; i++) {
        this.slides.push(this.data[i]);
    }

    loading.dismiss();

    this.start = this.end + 1;
    if ((this.start + this.end) < this.data.length) this.end = this.start + this.end;
    else this.end = this.data.length - 1;
}
}
