import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { error } from "util";
import { Provider } from "../../provider/provider";
import "rxjs/Rx";

@Injectable()
export class ServicesService {
  public constructor(public http: Http, public provider: Provider) {}

  public addNewAccount(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.addNewAccount;
    const bodyObject = {
      ID: ID,
      Billing: [
        {
          Product: "Home Entertainment",
          Price: 500,
          type: "bill",
          Payed: false
        },
        {
          Product: "Water And Electricity",
          Price: 1000,
          type: "bill",
          Payed: false
        },
        {
          Product: "Phone",
          Price: 100,
          type: "bill",
          Payed: false
        }
      ],
      Transaction: [],
      Account: [
        {
          Activate: false,
          Balance: 0,
          AccountName: "Visa Card"
        },
        {
          Activate: false,
          Balance: 0,
          AccountName: "American Express"
        },
        {
          Activate: false,
          Balance: 0,
          AccountName: "Master Card"
        }
      ]
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public getAccount(): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.getAccount;
    return this.http
      .get(link, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public activate(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.activate;
    const bodyObject = {
        ID:ID
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public bill(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.bill;
    const bodyObject = {
        ID:ID
    };
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
}
