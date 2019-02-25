import { Component } from '@angular/core';
import { Platform , Keyboard} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { LoginPage } from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs'
import * as jwtDecode from 'jwt-decode';
import {Provider} from '../provider/provider'
import {DashboardPage} from '../pages/dashboard/dashboard'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  showSplash = true;
  public key:any;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public keyboard: Keyboard ,  public provider:Provider
    ) {
    platform.ready().then(() => {
      this.key=localStorage.getItem('token');
      this.rootPage = DashboardPage
      // console.log('my key isss', this.key)
      // if(this.key){
      //   this.provider.userData = jwtDecode(this.key);
      //   this.rootPage = TabsPage
      // }
      // else{
      //   this.rootPage = LoginPage
      // }
       
      statusBar.styleDefault();
      splashScreen.hide();
      timer(1000).subscribe(() => this.showSplash = false)
    });
  }
}
