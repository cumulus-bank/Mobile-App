import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { SignupPage } from "../signup/signup";
import { DashboardPage } from "../dashboard/dashboard";

import { LoginService } from "../../services/login-service/login.component.service";
import { AlertController, LoadingController } from "ionic-angular";
import {Provider} from '../../provider/provider'
import * as jwtDecode from 'jwt-decode';
import { StatusBar } from '@ionic-native/status-bar';
import { AllservicesService } from "../../services/allservices/allservices.component.service";

// import {ServicesService} from "../../services/services/services.component.services.ts"
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  username: String;
  password: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public provider:Provider,
    public statusBar: StatusBar,
    public allservicesService:AllservicesService
  ) {}
  ionViewWillEnter() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  login() {
    this.provider.userData = {
      "UserID": Math.floor(Math.random() * Math.floor(1000)),
      "Email": this.username,
      "FirstName": "",
      "LastName": "",
      "Mobile": ""
    }
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();

    this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
      console.log("data isss",dataID);
      if(dataID.length===0){
        this.allservicesService.addNewAccount(this.provider.userData["UserID"]).subscribe(insertData=>{
          console.log("data sucesfully inserted",insertData)
          this.navCtrl.push(DashboardPage);
          loading.dismiss();
        },(error)=>{

        })
      }
      else{
        this.navCtrl.push(DashboardPage);
        loading.dismiss();
      }
    },(error)=>{
      let alert = this.alertCtrl.create({
        title: "Alert!",
        subTitle: "OOOOPS... Something Went Wrong",
        buttons: ["Dismiss"]
      });
      loading.dismiss();
      alert.present();
    })


    // this.loginService.login(this.username, this.password).subscribe(
    //   data => {
    //     // this.statusBar.backgroundColorByHexString("#25312C")
    //     this.provider.token = data['token'];
    //     localStorage.setItem('token', this.provider.token);
    //     this.provider.userData = jwtDecode( data['token']);
    //     this.provider.userData = this.provider.userData["data"][0]
    //     console.log(this.provider.userData)
    //     this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(dataID=>{
    //       console.log("data isss",dataID);
    //       if(dataID.length===0){
    //         this.allservicesService.addNewAccount(this.provider.userData["UserID"]).subscribe(insertData=>{
    //           console.log("data sucesfully inserted",insertData)
    //           this.navCtrl.push(DashboardPage);
    //           loading.dismiss();
    //         },(error)=>{

    //         })
    //       }
    //       else{
    //         this.navCtrl.push(DashboardPage);
    //         loading.dismiss();
    //       }
    //     },(error)=>{
    //       let alert = this.alertCtrl.create({
    //         title: "Alert!",
    //         subTitle: "OOOOPS... Something Went Wrong",
    //         buttons: ["Dismiss"]
    //       });
    //       loading.dismiss();
    //       alert.present();
    //     })

    //   },
    //   error => {
    //     console.log(error)
    //     let alert = this.alertCtrl.create({
    //       title: "Alert!",
    //       subTitle: "OOOOPS... Something Went Wrong",
    //       buttons: ["Dismiss"]
    //     });
    //     loading.dismiss();
    //     alert.present();
    //   }
    // );
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
