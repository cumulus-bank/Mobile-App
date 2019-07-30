import { Injectable } from "@angular/core";
@Injectable()
export class Provider {
  public apiUrl: any;
  public userData: any = null;
  public token: any = null;
  public rawData: any = null;
  public url: any = "console.9.30.210.207.nip.io";
  public abi: any;
  constructor() {
    this.apiUrl = {
      login: "http://" + this.url + ":31196/login",
      signup: "http://" + this.url + ":31196/createUser",
      book: "http://" + this.url + "/bookingsvc/book",
      listBookingByUser:
        "http://" + this.url + "/bookingsvc/listBookingByUser",
      checkin: "http://" + this.url + "/bookingsvc/checkin",
      listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
      listFlights: "http://" + this.url + "/listingsvc/searchFlights",
      listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
      map:  "http://" + this.url + "/mapsvc/getMap",
      email: 'http://' +this.url + "/celerysvc/postEmail",
      addNewAccount: 'http://' +this.url + ":31784/listAccount",
      getAccount: 'http://' +this.url + ":31784/listAccount",
      getAccountById: 'http://' +this.url + ":31784/listAccount",
      getAccountByID: 'http://' +this.url + ":31784/listAccountID",
      updateAccount: 'http://' +this.url + ":31784/listAccount",
      activate: 'http://' +this.url + ":31784/activate",
      paybill: 'http://' +this.url + ":31784/bill",
      balanceUpdate: 'http://' +this.url + ":31784/balanceUpdate",
      addTransaction: 'http://' +this.url + ":31784/transaction",
      deleteAccount: 'http://' +this.url + ":31784/listAccount",
      getsessionid:'http://' +this.url + ":31538/session",
      watsoncall: 'http://' +this.url + ":31538/watson",
      sms: 'http://' +this.url + ":31168/send",
      odm:'http://' +this.url + ":32219/odm",
    };
  }
}