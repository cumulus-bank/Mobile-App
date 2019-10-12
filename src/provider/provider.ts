import { Injectable } from "@angular/core";
@Injectable()
export class Provider {
  public apiUrl: any;
  public userData: any = null;
  public token: any = null;
  public rawData: any = null;
  public url: any = "istio-ingressgateway-istio-system.apps.ocpclustervj.os.fyre.ibm.com";
  public abi: any;
  constructor() {
    this.apiUrl = {
      login: "http://" + this.url + "/authsvc/login",
      signup: "http://" + this.url + "/authsvc/createUser",
      book: "http://" + this.url + "/bookingsvc/book",
      listBookingByUser:
        "http://" + this.url + "/bookingsvc/listBookingByUser",
      checkin: "http://" + this.url + "/bookingsvc/checkin",
      listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
      listFlights: "http://" + this.url + "/listingsvc/searchFlights",
      listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
      map:  "http://" + this.url + "/mapsvc/getMap",
      email: 'http://' +this.url + "/celerysvc/postEmail",
      addNewAccount: 'http://' +this.url + "/accountsvc/listAccount",
      getAccount: 'http://' +this.url + "/accountsvc/listAccount",
      getAccountById: 'http://' +this.url + "/accountsvc/listAccount",
      getAccountByID: 'http://' +this.url + "/accountsvc/listAccountID",
      updateAccount: 'http://' +this.url + "/accountsvc/listAccount",
      activate: 'http://' +this.url + "/accountsvc/activate",
      paybill: 'http://' +this.url + "/accountsvc/bill",
      balanceUpdate: 'http://' +this.url + "/accountsvc/balanceUpdate",
      addTransaction: 'http://' +this.url + "/accountsvc/transaction",
      deleteAccount: 'http://' +this.url + "/accountsvc/listAccount",
      getsessionid:'http://' +this.url + "/aisvc/session",
      watsoncall: 'http://' +this.url + "/aisvc/watson",
      sms: 'http://' +this.url + "/send",
      odm:'http://' +this.url + "/odm",
      customerfeed: 'http://' +this.url + "/accountsvc/customerfeed",
      ledgerfeed: 'http://' +this.url + "/accountsvc/ledgerfeed",
      utilitybill: 'http://' +this.url + "/accountsvc/utilitybill",
    };
  }
}