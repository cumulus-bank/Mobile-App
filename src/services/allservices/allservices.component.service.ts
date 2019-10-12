
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { error } from "util";
import { Provider } from "../../provider/provider";
import "rxjs/Rx";

@Injectable()
export class AllservicesService {
  public constructor(public http: Http, public provider: Provider) {}

  public customerfeed(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.customerfeed;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    console.log(bodyString);
    return this.http
      .post(link, bodyObject, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public ledgerfeed(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.ledgerfeed;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyString, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public utilitybill(object): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    });
    const link = this.provider.apiUrl.utilitybill;
    const bodyObject = object
    const bodyString = JSON.stringify(bodyObject); // Stringify payload
    return this.http
      .post(link, bodyString, options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public addNewAccount(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.addNewAccount;
    const bodyObject = {
      ID: ID,
      CurrentAccount:[
        {
          Balance: 10000,
          CuurentSpending:10000,
          AccountName: "Current Account"
        },
        {
          Balance: 30000,
          CuurentSpending:30000,
          AccountName: "Saving Account"
        },
        {
          Balance: 90000,
          CuurentSpending:90000,
          AccountName: "Loan Account"
        },
        {
          Balance: 900000,
          CuurentSpending:900000,
          AccountName: "Mortgage Account"
        },
        {
          Balance: 3000,
          CuurentSpending:3000,
          AccountName: "Charity Account"
        }
      ],
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
          CuurentSpending: 0,
          AccountName: "Visa Card"
        },
        {
          Activate: false,
          CuurentSpending:0,
          Balance: 0,
          AccountName: "American Express"
        },
        {
          Activate: false,
          CuurentSpending: 0,
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

  public sms(msg, number): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.sms;
    const bodyObject = {
      message:msg,
      reciever : number
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
    const link = this.provider.apiUrl.paybill;
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

  public balanceUpdate(ID,balance): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.balanceUpdate;
    const bodyObject = {
        ID:ID,
        balance:balance
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

  public addTransaction(ID,Product,Price,AccountID,AccountName,Type,DateNow): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.addTransaction;
    console.log("my id issss", ID)
    const bodyObject = {
        ID:ID,
        Product:Product,
        Price:Price,
        AccountID:AccountID,
        AccountName:AccountName,
        Type:Type,
        Date:DateNow

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

  public odm(cardType,cardTier, cardLimit, nameOnCard, cardStatus, cardOffers) : Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.odm;
    const bodyObject = {
        cardType,
        cardTier,
        cardLimit,
        nameOnCard,
        cardStatus,
        cardOffers
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


  public getAccountById(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.getAccountById+'/'+ID;
    return this.http
      .get(link , options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }

  public getAccountByID(ID): Observable<any> {
    const options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const link = this.provider.apiUrl.getAccountByID+'/'+ID;
    return this.http
      .get(link , options) // ...using post request
      .map((res: Response) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
      });
  }
}
