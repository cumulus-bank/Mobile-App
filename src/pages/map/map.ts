import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import leaflet from "leaflet";
import 'leaflet-routing-machine';
import {DashboardPage} from '../dashboard/dashboard'
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
  ionViewDidEnter() {
  }
  loadmap() {
    // this.map = leaflet.map("map").fitWorld();
    // leaflet
    //   .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attributions:
    //       'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18
    //   })
    //   .addTo(this.map);
    // this.map
    //   .locate({
    //     setView: true,
    //     maxZoom: 13
    //   })
    //   .on("locationfound", e => {
    //     var latlngs = [[e.latitude, e.longitude], [this.values.lat, this.values.long]];
    //     var polyline = leaflet.polyline(latlngs, { color: "blue" }).addTo(this.map);
    //     this.map.fitBounds(polyline.getBounds());
    //     leaflet.Routing.control({
    //       waypoints: [
    //           leaflet.latLng(e.latitude, e.longitude),
    //           leaflet.latLng(this.values.lat, this.values.long)
    //       ],
    //       routeWhileDragging: true
    //   }).addTo(this.map);
    //   })
    var locations = [
      ["CUMULUS, Abu Dhabhi Branch",24.4539, 54.3773],
      ["CUMULUS, Dubai Branch",25.2048, 55.2778],
      ["CUMULUS, Ajman Branch",25.4052,55.5136],
      ["CUMULUS, Sharjah Branch",25.4111,56.2482],
      ["CUMULUS, RAK Branch",25.6741,55.9804]
      ];
  
          var map = leaflet.map('map').setView([25.2048, 55.2708], 8);
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
  goback(){
    this.navCtrl.setRoot(DashboardPage)
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
  }
  cancel() {
    this.navCtrl.pop();
  }
}
