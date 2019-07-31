import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ChatService } from "../../services/chat-service/chat.component.service";
import { ListingService } from "../../services/listing-schedule-service/listing.component.service";
import { AllservicesService } from "../../services/allservices/allservices.component.service";
import {Provider} from '../../provider/provider'

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AlertController, LoadingController } from "ionic-angular";
import { templateSourceUrl } from "@angular/compiler";

@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  public Year: any;
  public Month: any;
  public DayOfMonth: any;
  public bookinginfo:any;
  public temp:any;
  public sessionid: any = null;
  public message: any = [];
  input: any;
  public watsontype: any = false;
  public type: any = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatService: ChatService,
    public loadingCtrl: LoadingController,
    public listingService: ListingService,
    public allservicesService: AllservicesService,
    public provider: Provider
  ) {
    if (!this.sessionid) {
      this.chatService.getsessionid().subscribe(
        data => {
          this.sessionid = data["session_id"];
        },
        error => {
          this.sessionid = null;
        }
      );
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChatPage");
    this.message.push({
      user: "watson",
      message: "Hi, I am watson, what can I help you with?"
    });
  }
  doSend() {
    this.type=false;
    this.message.push({
      user: "human",
      message: this.input
    });
    console.log(this.message);
    this.temp = this.input;
    this.input = "";
    if (this.sessionid) {
      this.watsontype = true;
      this.chatService.call(this.temp, this.sessionid).subscribe(
        data => {
          
          if((data["response"]["output"]["generic"][0]["text"]!=='bills'))
          {
            this.watsontype = false;
            this.message.push({
            user: "watson",
            message: data["response"]["output"]["generic"][0]["text"]
          });
        }
        if((data["response"]["output"]["generic"][0]["text"]==='bills'))
        {
          let temp = []
          this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe( data => {
            console.log(data);
            data[0]['Billing'].forEach(element => {
              if(!element['Payed']){
                temp.push(element['Product'])
                console.log('temp',temp)
              }
            });
            if(temp.length === 0)
            {
              this.watsontype = false;
            this.message.push({
              user: "watson",
              message:'No! You dont have any pending bills! :)'
            });
          }
          else{
            this.watsontype = false;
            this.message.push({
              user: "watson",
              message:'You need to pay your ' + temp.join(' , ') + 'bills'
            });
          }
          } , error => {
            this.watsontype = false;

          })

      }
        else{
          this.chatService.getsessionid().subscribe(
            data => {
              this.sessionid = data["session_id"];
            },
            error => {
              this.sessionid = null;
            }
          );
          this.bookinginfo = data["response"]["output"]["generic"][0]["text"].split(',')
          console.log(this.bookinginfo)
        }
        },
        error => {
          this.watsontype = false;
          this.sessionid = null;
          this.chatService.getsessionid().subscribe(
            data => {
              this.sessionid = data["session_id"];
            },
            error => {
              this.sessionid = null;
            }
          );
        }
      );
    }
  }
  typing() {
    console.log(this.input);
    if (this.input != "") {
      this.type = true;
    } else {
      this.type = false;
    }
  }
}
