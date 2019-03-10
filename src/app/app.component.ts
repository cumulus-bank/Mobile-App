import { Component, ViewChild } from '@angular/core';
import { Platform , Keyboard, Nav, MenuController, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { LoginPage } from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs'
import * as jwtDecode from 'jwt-decode';
import {Provider} from '../provider/provider'
import {DashboardPage} from '../pages/dashboard/dashboard'
import {ContactPage} from '../pages/contact/contact'
import {MapPage} from '../pages/map/map'
import {AboutPage} from '../pages/about/about'
import { HomePage } from '../pages/home/home';
import {BookingPage} from '../pages/booking/booking'
import { ShopPage } from '../pages/shop/shop';
import { ChatPage } from '../pages/chat/chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any ;
  showSplash = true;
  public key:any;
  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean, page:any }>;
  state: any;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public keyboard: Keyboard ,  public provider:Provider, public menuCtrl: MenuController
    ) {
      this.rightMenuItems = [
        { icon: 'home', active: true, page: 'DashboardPage' },
        { icon: 'heart', active: false, page: 'ShopPage' },
        { icon: 'pin', active: false , page: 'MapPage'},
        { icon: 'cash', active: false, page: 'AboutPage' },
        { icon: 'card', active: false , page: 'HomePage'},
        { icon: 'person', active: false, page: 'ContactPage' },
        { icon: 'chatboxes', active: false, page: 'ChatPage' },
        { icon: 'log-out', active: false, page: 'LoginPage' }
      ];
    platform.ready().then(() => {
      this.key=localStorage.getItem('token');
      this.rootPage = LoginPage
      statusBar.styleDefault();
      splashScreen.hide();
      timer(1000).subscribe(() => this.showSplash = false)
    });
  }
  rightMenuClick(item,page) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
    console.log('page to navigate isss',page)
    if(page==='ChatPage')
    this.nav.setRoot(ChatPage);
    if(page==='ShopPage')
    this.nav.setRoot(ShopPage);
    if(page==='MapPage')
    this.nav.setRoot(MapPage);
    if(page === 'AboutPage')
    this.nav.setRoot(AboutPage);
    if(page === 'DashboardPage')
    this.nav.setRoot(DashboardPage);
    if(page === 'HomePage')
    this.nav.setRoot(HomePage);
    if(page === 'ContactPage')
    this.nav.setRoot(ContactPage);
    if(page === 'LoginPage')
    this.nav.setRoot(LoginPage);
  }
  goto(page){

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page)
    this.nav.setRoot(page.component);
  }
}
