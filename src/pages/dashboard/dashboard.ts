import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardService } from "../dashboard/dashboard.service";
import { MapPage } from "../map/map";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController, LoadingController } from "ionic-angular";
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import { Provider } from "../../provider/provider";

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
  public show: any = null;

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
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.allservicesService.getAccountByID(this.provider.userData["data"]["USERID"]).subscribe(dataID=>{
      this.show = dataID[0];
      loading.dismiss()
    },(error)=>{
      loading.dismiss()
    })
    
  }
  doRefresh(refresher) {
    this.allservicesService.getAccountByID(this.provider.userData["data"]["USERID"]).subscribe(dataID=>{
      this.show = dataID[0];
      refresher.complete()
    },(error)=>{
      refresher.complete()
    })
  }
}
