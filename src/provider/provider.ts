import { Injectable } from "@angular/core";
@Injectable()
export class Provider {
  public apiUrl: any;
  public userData: any = null;
  public token: any = null;
  public rawData: any = null;
  public url: any = "";
  public abi: any;
  constructor() {
    this.apiUrl = {
      login: "/authsvc/login",
      signup: "/authsvc/createUser",
      book: "/bookingsvc/book",
      listBookingByUser: "/bookingsvc/listBookingByUser",
      checkin: "/bookingsvc/checkin",
      listFlightsByID: "/listingsvc/listFlights",
      listFlights: "/listingsvc/searchFlights",
      listAllFlights: "/listingsvc/listFlights",
      map: "/mapsvc/getMap",
      email: "/celerysvc/postEmail",
      addNewAccount: "/accountsvc/listAccount",
      getAccount: "/accountsvc/listAccount",
      getAccountById: "/accountsvc/listAccount",
      getAccountByID: "/accountsvc/listAccountID",
      updateAccount: "/accountsvc/listAccount",
      activate: "/accountsvc/activate",
      paybill: "/accountsvc/bill",
      balanceUpdate: "/accountsvc/balanceUpdate",
      addTransaction: "/accountsvc/transaction",
      deleteAccount: "/accountsvc/listAccount",
      getsessionid: "/aisvc/session",
      watsoncall: "/aisvc/watson",
      sms: "/send",
      odm: "/odm",
      customerfeed: "/accountsvc/customerfeed",
      ledgerfeed: "/accountsvc/ledgerfeed",
      utilitybill: "/accountsvc/utilitybill",
    };
  }
}
