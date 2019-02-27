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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dashboardService: DashboardService,
    private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public allservicesService: AllservicesService,
    public provider: Provider,

  ) {}

  ionViewDidLoad() {

    
  }
  navigate(page){
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
}
