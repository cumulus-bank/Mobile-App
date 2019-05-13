import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import leaflet from "leaflet";
import "leaflet-routing-machine";
import { DashboardPage } from "../dashboard/dashboard";
@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  public values: any;
  public latlongs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.values = navParams.get("item");
    console.log(this.values);
  }
  ionViewDidEnter() {}
  loadmap() {
    var locations = [
      ["CUMULUS, Abu Dhabhi Branch", 24.4539, 54.3773],
      ["CUMULUS, Dubai Branch", 25.2048, 55.2778],
      ["CUMULUS, Ajman Branch", 25.4052, 55.5136],
      ["CUMULUS, Sharjah Branch", 25.4111, 56.2482],
      ["CUMULUS, RAK Branch", 25.6741, 55.9804]
    ];
  
          var map = leaflet.map('map').setView([24.4539, 54.3773], 7);
          var mapLink = 
              '<a href="http://openstreetmap.org">OpenStreetMap</a>';
          leaflet.tileLayer(
              'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; ' + mapLink + ' Contributors',
              maxZoom: 18,
              }).addTo(map);
  
      for (var i = 0; i < locations.length; i++) {
        var marker = new leaflet.marker([locations[i][1],locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(map);
      }
  }
  ionViewDidLoad() {
    this.loadmap();
  }
  goback() {
    this.navCtrl.setRoot(DashboardPage);
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
  }
  cancel() {
    this.navCtrl.pop();
  }
}
