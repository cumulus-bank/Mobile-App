webpackJsonp([8],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Provider = /** @class */ (function () {
    function Provider() {
        this.userData = null;
        this.token = null;
        this.rawData = null;
        this.url = "35.222.248.185:31380";
        this.apiUrl = {
            login: "http://" + this.url + "/authsvc/login",
            signup: "http://" + this.url + "/authsvc/createUser",
            book: "http://" + this.url + "/bookingsvc/book",
            listBookingByUser: "http://" + this.url + "/bookingsvc/listBookingByUser",
            checkin: "http://" + this.url + "/bookingsvc/checkin",
            listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
            listFlights: "http://" + this.url + "/listingsvc/searchFlights",
            listAllFlights: "http://" + this.url + "/listingsvc/listFlights",
            map: "http://" + this.url + "/mapsvc/getMap",
            email: 'http://' + this.url + "/celerysvc/postEmail",
            addNewAccount: 'http://' + this.url + "/accountsvc/listAccount",
            getAccount: 'http://' + this.url + "/accountsvc/listAccount",
            getAccountById: 'http://' + this.url + "/accountsvc/listAccount",
            getAccountByID: 'http://' + this.url + "/accountsvc/listAccountID",
            updateAccount: 'http://' + this.url + "/accountsvc/listAccount",
            activate: 'http://' + this.url + "/accountsvc/activate",
            paybill: 'http://' + this.url + "/accountsvc/bill",
            balanceUpdate: 'http://' + this.url + "/accountsvc/balanceUpdate",
            addTransaction: 'http://' + this.url + "/accountsvc/transaction",
            deleteAccount: 'http://' + this.url + "/accountsvc/listAccount",
            getsessionid: 'http://' + this.url + "/aisvc/session",
            watsoncall: 'http://' + this.url + "/aisvc/watson",
            sms: 'http://' + this.url + "/send",
            odm: 'http://' + this.url + "/odm",
        };
    }
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingService = /** @class */ (function () {
    function ListingService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    ListingService.prototype.listFlights = function (Year, Month, DayOfMonth, Origin, Dest) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listFlights;
        var bodyObject = {
            Year: Year,
            Month: Month,
            DayOfMonth: DayOfMonth,
            origin: Origin,
            dest: Dest
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService.prototype.listAllFlights = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listAllFlights;
        return this.http.post(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService.prototype.listFlightsByID = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.listFlightsByID + '/' + String(ID);
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    ListingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], ListingService);
    return ListingService;
}());

//# sourceMappingURL=listing.component.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailService = /** @class */ (function () {
    function EmailService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    EmailService.prototype.postEmail = function (toemail, src, dest) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.email;
        var bodyObject = {
            toemail: toemail,
            src: src,
            dest: dest,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) {
            "success";
        })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw({ "error": "you have a error" });
        });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.component.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, navParams, alertCtrl, bookingService, provider, loadingCtrl, emailService, actionSheetCtrl, odmService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.bookingService = bookingService;
        this.provider = provider;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.odmService = odmService;
        this.tx = null;
        this.gaugeType = "arch";
        this.gaugeValue = 0;
        this.gaugeLabel = "Amount";
        this.gaugeAppendText = "DHS";
        this.data = navParams.get("data");
        this.gaugeValue = 10000 - this.data['balance'];
        this.tx = this.data['tx'];
        this.cardtype = this.data['acc'];
        console.log("this is data", this.data);
    }
    BookingPage.prototype.ionViewDidLoad = function () {
    };
    BookingPage.prototype.ionViewWillLeave = function () {
    };
    BookingPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-booking",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/booking/booking.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Transaction</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col text-center>\n      <ngx-gauge [type]="gaugeType" [value]="gaugeValue" [label]="gaugeLabel" [min]=0 [max]=10000 [append]="gaugeAppendText">\n      </ngx-gauge>\n    </ion-col>\n  </ion-row>\n  <ng-container *ngIf="tx">\n    <div *ngFor="let card of tx">\n  <ion-list no-border *ngIf="card.AccountName === cardtype ">\n\n    <ion-list-header>\n      {{card.Date}}\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'cart\' item-start color="icon"></ion-icon>\n      Product\n      <ion-note item-end>\n        {{card.Product}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'cash\' item-start color="icon"></ion-icon>\n      Price\n      <ion-note item-end>\n        {{card.Price}} AED\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'information-circle\' item-start color="icon"></ion-icon>\n      Type\n      <ion-note item-end>\n        {{card.Type}}\n      </ion-note>\n    </ion-item>\n\n\n  </ion-list>\n  </div>\n  </ng-container>\n\n</ion-content>\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/booking/booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_email_service_email_component_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__services_odm_service_odm_component_service__["a" /* OdmService */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OffersPage = /** @class */ (function () {
    function OffersPage(allservicesService, navCtrl, navParams, bookingService, alertCtrl, loadingCtrl, emailService, provider) {
        this.allservicesService = allservicesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailService = emailService;
        this.provider = provider;
        console.log('UserId', this.navParams.get('userId'));
        this.bill = this.navParams.get('userId');
    }
    OffersPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    OffersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (dataID) {
            _this.data = dataID[0];
            console.log("data isssssssss", _this.data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage.prototype.confirm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        console.log(this.pricing);
        var creditbalance = this.pricing.split(",")[1];
        var id = this.pricing.split(",")[0];
        console.log(creditbalance, id);
        var finalcredit = creditbalance - this.bill['price'];
        this.finalcredit = finalcredit;
        console.log(finalcredit);
        var accountname = this.pricing.split(",")[2];
        var date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        console.log(this.data['_id'], "my dataaaaaa");
        if (creditbalance > 0) {
            this.allservicesService.bill(this.bill['id']).subscribe(function (data) {
                _this.allservicesService.balanceUpdate(id, finalcredit).subscribe(function (data) {
                    _this.allservicesService.addTransaction(_this.data["_id"], _this.bill['product'], _this.bill['price'], id, accountname, "Bill", date).subscribe(function (dataID) {
                        loading.dismiss();
                        _this.allservicesService.sms('Your ' + _this.bill['product'] + ' bill has been payed. Current ' + accountname + ' balance is ' + _this.finalcredit, '+971509786313').subscribe(function (sms) {
                            console.log(sms);
                            loading.dismiss();
                            _this.navCtrl.pop();
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                            _this.navCtrl.pop();
                        });
                    }, function (error) {
                        console.log(error);
                        _this.navCtrl.pop();
                        loading.dismiss();
                    });
                }, function (error) {
                    console.log(error);
                    loading.dismiss();
                    _this.navCtrl.pop();
                });
            }, function (error) {
                console.log(error);
                loading.dismiss();
                _this.navCtrl.pop();
            });
        }
        else {
            console.log("no enough balance");
        }
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="danger" (click)="cancel()">\n        CANCEL\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-divider color="light">Select Card</ion-item-divider>\n  <ion-list radio-group [(ngModel)]="pricing">\n    <ng-container *ngIf="data">\n      <ng-container *ngFor="let listshow of data.Account">\n    <ion-item *ngIf="listshow.Activate===true">\n      <ion-label>\n        <h3>\n          <ion-icon name="card" item-start></ion-icon>\n          {{listshow.AccountName}}\n        </h3>\n        <h3>\n          <ion-icon name="cash" item-start></ion-icon>\n          {{listshow.Balance}} DHS\n        </h3>\n      </ion-label>\n      <ion-radio value= "{{listshow._id}},{{listshow.Balance}},{{listshow.AccountName}}"></ion-radio>\n    </ion-item>\n    </ng-container>\n    </ng-container>\n  </ion-list>\n        \n  <ion-item>\n      <button ion-button block outline color="tab" (click)="confirm()">Pay</button>\n  </ion-item>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__["a" /* AllservicesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_booking_service_booking_component_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services_email_service_email_component_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_4__provider_provider__["a" /* Provider */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_allservices_allservices_component_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import {ServicesService} from "../../services/services/services.component.services.ts"
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loginService, alertCtrl, loadingCtrl, provider, statusBar, allservicesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.provider = provider;
        this.statusBar = statusBar;
        this.allservicesService = allservicesService;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "flex";
            });
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.loginService.login(this.username, this.password).subscribe(function (data) {
            // this.statusBar.backgroundColorByHexString("#25312C")
            _this.provider.token = data['token'];
            localStorage.setItem('token', _this.provider.token);
            _this.provider.userData = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(data['token']);
            _this.provider.userData = _this.provider.userData["data"][0];
            console.log(_this.provider.userData);
            _this.allservicesService.getAccountByID(_this.provider.userData["UserID"]).subscribe(function (dataID) {
                console.log("data isss", dataID);
                if (dataID.length === 0) {
                    _this.allservicesService.addNewAccount(_this.provider.userData["UserID"]).subscribe(function (insertData) {
                        console.log("data sucesfully inserted", insertData);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                        loading.dismiss();
                    }, function (error) {
                    });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                    loading.dismiss();
                }
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: "Alert!",
                    subTitle: "OOOOPS... Something Went Wrong",
                    buttons: ["Dismiss"]
                });
                loading.dismiss();
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n					<ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light" (click)="login()">Log in</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n</ion-content>\n\n<ion-footer no-border>\n\n	<footer>\n		<p class="copyright">© IBM 2019 </p>\n	</footer>\n\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__services_allservices_allservices_component_service__["a" /* AllservicesService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, signupService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalData = ["GOLD", "SILVER", "BRONZE"];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignupPage");
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.signupService
            .signup(this.firstName, this.lastName, this.age, this.email, this.password, this.mobile)
            .subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Hi There! You have Sucessfully Signed Up!",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
            console.log(error);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/signup/signup.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="First Name" [(ngModel)]="firstName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="lastName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="body" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="number" placeholder="Age" [(ngModel)]="age"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="call" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Mobile" [(ngModel)]="mobile"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="at" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="medical" color="dark"></ion-icon>\n          </ion-label>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <button ion-button block outline color="light" (click)="signup()">Signup</button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" ion-button clear full color="light" (click)="signin()">Already have an account? Sign in</button>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/booking/booking.module": [
		710,
		7
	],
	"../pages/chat/chat.module": [
		709,
		6
	],
	"../pages/dashboard/dashboard.module": [
		711,
		5
	],
	"../pages/login/login.module": [
		712,
		4
	],
	"../pages/map/map.module": [
		713,
		3
	],
	"../pages/offers/offers.module": [
		716,
		2
	],
	"../pages/shop/shop.module": [
		714,
		1
	],
	"../pages/signup/signup.module": [
		715,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    ChatService.prototype.call = function (text, session_id) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.watsoncall;
        var bodyObject = {
            text: text,
            session_id: session_id
        };
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    ChatService.prototype.getsessionid = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.getsessionid;
        console.log('log of url', link);
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.component.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OdmService = /** @class */ (function () {
    function OdmService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    OdmService.prototype.getODM = function (srcAirport, dstAirport, customerTier, milesBalance) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': this.provider.token
            })
        });
        var link = this.provider.apiUrl.odm;
        var bodyObject = {
            srcAirport: srcAirport,
            dstAirport: dstAirport,
            customerTier: customerTier,
            milesBalance: milesBalance,
            offers: [],
            messages: []
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    OdmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], OdmService);
    return OdmService;
}());

//# sourceMappingURL=odm.component.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = /** @class */ (function () {
    function DashboardService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    DashboardService.prototype.list = function (lat, long) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = this.provider.apiUrl.map;
        console.log('linkkk', link);
        var bodyObject = {
            lat: lat,
            long: long
        };
        console.log('bodyyyy', bodyObject);
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckinService = /** @class */ (function () {
    function CheckinService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    CheckinService.prototype.checkin = function (BookingID, UserID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': this.provider.token
            })
        });
        var link = this.provider.apiUrl.checkin + '/' + String(BookingID) + '/' + String(UserID);
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    CheckinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], CheckinService);
    return CheckinService;
}());

//# sourceMappingURL=checkin.component.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupService = /** @class */ (function () {
    function SignupService(http, provider) {
        this.http = http;
        this.provider = provider;
        this.parameters = {};
        this.params = {};
    }
    SignupService.prototype.signup = function (firstName, lastName, age, email, password, mobile) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.signup;
        var bodyObject = {
            'firstName': firstName,
            'lastName': lastName,
            'age': Number(age),
            'email': email,
            'password': password,
            'mobile': mobile,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup.component.service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http, provider) {
        var _this = this;
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.parameters = {};
        this.params = {};
        this.getJSON().subscribe(function (data) {
            _this.provider.rawData = data;
        });
    }
    LoginService.prototype.getJSON = function () {
        return this.http
            .get(this._url)
            .map(function (response) { return response.json(); });
    };
    LoginService.prototype.login = function (email, password) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.login;
        var bodyObject = {
            email: email,
            password: password
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.component.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service_login_component_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_signup_service_signup_component_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_listing_schedule_service_listing_component_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_booking_service_booking_component_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_chat_service_chat_component_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_email_service_email_component_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_checkin_service_checkin_component_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_native_http_angular_wrapper__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_odm_service_odm_component_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_chat_chat__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_leaflet_routing_machine__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_gauge__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_carousel_carousel__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_35__components_carousel_carousel__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__["a" /* ShopPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_34_ngx_gauge__["a" /* NgxGaugeModule */],
                __WEBPACK_IMPORTED_MODULE_29_ionic_native_http_angular_wrapper__["a" /* NativeHttpWrapper */],
                __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_shop_shop__["a" /* ShopPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_15__services_login_service_login_component_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_16__services_signup_service_signup_component_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_21__provider_provider__["a" /* Provider */],
                __WEBPACK_IMPORTED_MODULE_22__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
                __WEBPACK_IMPORTED_MODULE_24__services_booking_service_booking_component_service__["a" /* BookingService */],
                __WEBPACK_IMPORTED_MODULE_27__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
                __WEBPACK_IMPORTED_MODULE_28__services_allservices_allservices_component_service__["a" /* AllservicesService */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_26__services_email_service_email_component_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_31__services_odm_service_odm_component_service__["a" /* OdmService */],
                __WEBPACK_IMPORTED_MODULE_25__services_chat_service_chat_component_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllservicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllservicesService = /** @class */ (function () {
    function AllservicesService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    AllservicesService.prototype.addNewAccount = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.addNewAccount;
        var bodyObject = {
            ID: ID,
            CurrentAccount: [
                {
                    Balance: 10000,
                    CuurentSpending: 10000,
                    AccountName: "Current Account"
                },
                {
                    Balance: 30000,
                    CuurentSpending: 30000,
                    AccountName: "Saving Account"
                },
                {
                    Balance: 90000,
                    CuurentSpending: 90000,
                    AccountName: "Loan Account"
                },
                {
                    Balance: 900000,
                    CuurentSpending: 900000,
                    AccountName: "Mortgage Account"
                },
                {
                    Balance: 3000,
                    CuurentSpending: 3000,
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
                    CuurentSpending: 0,
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
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.getAccount = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.getAccount;
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.activate = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.activate;
        var bodyObject = {
            ID: ID
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.sms = function (msg, number) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.sms;
        var bodyObject = {
            message: msg,
            reciever: number
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.bill = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.paybill;
        var bodyObject = {
            ID: ID
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.balanceUpdate = function (ID, balance) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.balanceUpdate;
        var bodyObject = {
            ID: ID,
            balance: balance
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.addTransaction = function (ID, Product, Price, AccountID, AccountName, Type, DateNow) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.addTransaction;
        console.log("my id issss", ID);
        var bodyObject = {
            ID: ID,
            Product: Product,
            Price: Price,
            AccountID: AccountID,
            AccountName: AccountName,
            Type: Type,
            Date: DateNow
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.odm = function (cardType, cardTier, cardLimit, nameOnCard, cardStatus, cardOffers) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.odm;
        var bodyObject = {
            cardType: cardType,
            cardTier: cardTier,
            cardLimit: cardLimit,
            nameOnCard: nameOnCard,
            cardStatus: cardStatus,
            cardOffers: cardOffers
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.getAccountById = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.getAccountById + '/' + ID;
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService.prototype.getAccountByID = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var link = this.provider.apiUrl.getAccountByID + '/' + ID;
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    AllservicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], AllservicesService);
    return AllservicesService;
}());

//# sourceMappingURL=allservices.component.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, dashboardService, loadingCtrl, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.show = null;
        this.gaugeType = "arch";
        this.gaugeValue = 900;
        this.gaugeLabel = "Amount";
        this.gaugeAppendText = "DHS";
        this.showCoursel = false;
        this.data = [];
        this.slides = [];
        this.start = 0;
        this.end = 4;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (data) {
            _this.loginData = data[0]['CurrentAccount'];
            console.log('logindata', _this.loginData);
            var tempdata = [];
            _this.loginData.forEach(function (value, i) {
                console.log(value, i);
                console.log('data isss', data);
                tempdata.push({
                    'id': i,
                    'title': value['AccountName'],
                    'account': value['CuurentSpending']
                });
            });
            _this.data = tempdata;
            _this.showCoursel = true;
            _this.getCurrentSlides();
        }, function (error) {
            console.log(error);
        });
        //   this.getCurrentSlides();
    };
    DashboardPage.prototype.navigate = function (page) {
        if (page === 'shop')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_shop_shop__["a" /* ShopPage */]);
        if (page === 'map')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */]);
        if (page === 'bills')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
        if (page === 'credit')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
        if (page === 'profile')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */]);
        if (page === 'support')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */]);
    };
    DashboardPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DashboardPage.prototype.getCurrentSlides = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        if (this.start == this.data.length) {
            this.start = 0;
            this.end = 5;
        }
        this.slides = [];
        for (var i = this.start; i <= this.end; i++) {
            this.slides.push(this.data[i]);
        }
        loading.dismiss();
        this.start = this.end + 1;
        if ((this.start + this.end) < this.data.length)
            this.end = this.start + this.end;
        else
            this.end = this.data.length - 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], DashboardPage.prototype, "nav", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/dashboard/dashboard.html"*/'<ion-header >\n  <ion-toolbar >\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">HOME</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="masters">\n  <carousel [slides]="slides"  (selectSlide)="selectItem($event);" *ngIf="showCoursel"></carousel>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'shop\')">\n              <ion-icon name="heart" color="icon"></ion-icon>\n              <h2>Offers</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'map\')">\n              <ion-icon name="pin" color="icon"></ion-icon>\n              <h2>Find ATM</h2>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'bills\')">\n              <ion-icon name="cash" color="icon"></ion-icon>\n              <h2>Bills</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 >\n            <ion-card text-center padding color="white" (click)="navigate(\'credit\')">\n              <ion-icon name="card" color="icon"></ion-icon>\n              <h2>Cards</h2>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card text-center padding color="white" (click)="navigate(\'profile\')">\n              <ion-icon name="person" color="icon"></ion-icon>\n              <h2>Profile</h2>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n              <ion-card text-center padding color="white" (click)="navigate(\'support\')">\n                <ion-icon name="chatboxes" color="icon"></ion-icon>\n                <h2>Chatbot</h2>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <div>\n          <div class="cardd">\n              <div class="bank-name" title="BestBank">Cumulus Bank</div>\n              <div class="chip">\n                  <div class="side left"></div>\n                  <div class="side right"></div>\n                  <div class="vertical top"></div>\n                  <div class="vertical bottom"></div>\n              </div>\n              <div class="data">\n                  <div class="pan" title="4123 4567 8910 1112">4123 4567 8910 1112</div>\n                  <div class="first-digits">4123</div>\n                  <div class="exp-date-wrapper">\n                      <div class="left-label">EXPIRES END</div>\n                      <div class="exp-date">\n                          <div class="upper-labels">MONTH/YEAR</div>\n                          <div class="date" title="01/17">01/17</div>\n                      </div>\n                  </div>\n                  <div class="name-on-card" title="John Doe">Saif Ur Rehman</div>\n              </div>\n              <div class="lines-down"></div>\n              <div class="lines-up"></div>\n          </div>\n          </div> -->\n</ion-content>\n\n<ion-footer no-border>\n  \n  <footer>\n    <p class="copyright"> Made by © IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            __WEBPACK_IMPORTED_MODULE_4__provider_provider__["a" /* Provider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, chatService, loadingCtrl, listingService, allservicesService, provider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.listingService = listingService;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.sessionid = null;
        this.message = [];
        this.watsontype = false;
        this.type = false;
        if (!this.sessionid) {
            this.chatService.getsessionid().subscribe(function (data) {
                _this.sessionid = data["session_id"];
            }, function (error) {
                _this.sessionid = null;
            });
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChatPage");
        this.message.push({
            user: "watson",
            message: "Hi, I am watson, what can I help you with?"
        });
    };
    ChatPage.prototype.doSend = function () {
        var _this = this;
        this.type = false;
        this.message.push({
            user: "human",
            message: this.input
        });
        console.log(this.message);
        this.temp = this.input;
        this.input = "";
        if (this.sessionid) {
            this.watsontype = true;
            this.chatService.call(this.temp, this.sessionid).subscribe(function (data) {
                if ((data["response"]["output"]["generic"][0]["text"] !== 'bills')) {
                    _this.watsontype = false;
                    _this.message.push({
                        user: "watson",
                        message: data["response"]["output"]["generic"][0]["text"]
                    });
                }
                if ((data["response"]["output"]["generic"][0]["text"] === 'bills')) {
                    var temp_1 = [];
                    _this.allservicesService.getAccountByID(_this.provider.userData["UserID"]).subscribe(function (data) {
                        console.log(data);
                        data[0]['Billing'].forEach(function (element) {
                            if (!element['Payed']) {
                                temp_1.push(element['Product']);
                                console.log('temp', temp_1);
                            }
                        });
                        if (temp_1.length === 0) {
                            _this.watsontype = false;
                            _this.message.push({
                                user: "watson",
                                message: 'No! You dont have any pending bills! :)'
                            });
                        }
                        else {
                            _this.watsontype = false;
                            _this.message.push({
                                user: "watson",
                                message: 'You need to pay your ' + temp_1.join(' , ') + 'bills'
                            });
                        }
                    }, function (error) {
                        _this.watsontype = false;
                    });
                }
                else {
                    _this.chatService.getsessionid().subscribe(function (data) {
                        _this.sessionid = data["session_id"];
                    }, function (error) {
                        _this.sessionid = null;
                    });
                    _this.bookinginfo = data["response"]["output"]["generic"][0]["text"].split(',');
                    console.log(_this.bookinginfo);
                }
            }, function (error) {
                _this.watsontype = false;
                _this.sessionid = null;
                _this.chatService.getsessionid().subscribe(function (data) {
                    _this.sessionid = data["session_id"];
                }, function (error) {
                    _this.sessionid = null;
                });
            });
        }
    };
    ChatPage.prototype.typing = function () {
        console.log(this.input);
        if (this.input != "") {
            this.type = true;
        }
        else {
            this.type = false;
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-chat",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="message-wrap" *ngFor="let show of message">\n    \n\n    <div class="sender" *ngIf="show.user===\'watson\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 text-left>\n            <img class="friend-img" src="../assets/watson_logo.gif" alt="">\n          </ion-col>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="me" *ngIf="show.user===\'human\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>{{show.message}}</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/avatar.png" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n  <div class="me" *ngIf="type">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <p>Typing ...</p>\n          </ion-col>\n          <ion-col col-2>\n            <img class="friend-img" src="../assets/typing.gif" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="sender" *ngIf="watsontype">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 text-left>\n              <img class="friend-img" src="../assets/typing.gif" alt="">\n            </ion-col>\n            <ion-col col-10>\n              <p>Watson is typing...</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar color="facebook">\n    <ion-textarea (keyup.enter)="doSend()" [(ngModel)]="input" placeholder="Enter your message" name="message" (ngModelChange)="typing($event)"></ion-textarea>\n    <ion-buttons end>\n      <button (click)="doSend()" ion-button icon-only>\n        <ion-icon name="send" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_chat_service_chat_component_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shop_shop__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard, provider, menuCtrl) {
        var _this = this;
        this.keyboard = keyboard;
        this.provider = provider;
        this.menuCtrl = menuCtrl;
        this.showSplash = true;
        this.rightMenuItems = [
            { icon: 'home', active: true, page: 'DashboardPage' },
            { icon: 'heart', active: false, page: 'ShopPage' },
            { icon: 'pin', active: false, page: 'MapPage' },
            { icon: 'cash', active: false, page: 'AboutPage' },
            { icon: 'card', active: false, page: 'HomePage' },
            { icon: 'person', active: false, page: 'ContactPage' },
            { icon: 'chatboxes', active: false, page: 'ChatPage' },
            { icon: 'log-out', active: false, page: 'LoginPage' }
        ];
        platform.ready().then(function () {
            _this.key = localStorage.getItem('token');
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(1000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp.prototype.rightMenuClick = function (item, page) {
        this.rightMenuItems.map(function (menuItem) { return menuItem.active = false; });
        item.active = true;
        console.log('page to navigate isss', page);
        if (page === 'ChatPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */]);
        if (page === 'ShopPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_shop_shop__["a" /* ShopPage */]);
        if (page === 'MapPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]);
        if (page === 'AboutPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]);
        if (page === 'DashboardPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        if (page === 'HomePage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
        if (page === 'ContactPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */]);
        if (page === 'LoginPage')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goto = function (page) {
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page);
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n        <img src="../assets/watson_logo.gif" alt="ibm">\n</div>\n<ion-menu side="left" type="push" [content]="content" id="menu-right">\n        <ion-content>\n                <ion-list no-lines>\n                        <button menuClose icon-only ion-item detail-none (click)="rightMenuClick(item,item.page)"\n                                *ngFor="let item of rightMenuItems; let i = index">\n                                <div *ngIf="item.active" class="active-menu-item"></div>\n                                <ng-container *ngIf="item.icon===\'log-out\'">\n                                        <ion-icon [name]="item.icon" color=danger></ion-icon>\n                                </ng-container>\n                                <ng-container *ngIf="item.icon!==\'log-out\'">\n                                        <ion-icon [name]="item.icon"></ion-icon>\n                                </ng-container>\n                        </button>\n                </ion-list>\n        </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_6__provider_provider__["a" /* Provider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(statusBar) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */];
        statusBar.backgroundColorByHexString('#000000');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/tabs/tabs.html"*/'<ion-tabs color="tab">\n  <ion-tab [root]="tab1Root" tabTitle="Account" tabIcon="card"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Biils" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="History" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Chat" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Me" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_time_pipe__["a" /* TimeRefactorPipe */], __WEBPACK_IMPORTED_MODULE_0__pipes_country_pipe__["a" /* CountryRefactorPipe */]]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryRefactorPipe = /** @class */ (function () {
    function CountryRefactorPipe(http, provider) {
        var _this = this;
        this.http = http;
        this.provider = provider;
        this._url = "../assets/airports.json";
        this.fullCountryName = "airport not found";
        this.getJSON().subscribe(function (data) {
            _this.provider.rawData = data;
        });
    }
    CountryRefactorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.provider.rawData) {
            console.log('lengtgg', this.provider.rawData.length);
            for (var i = 0; i < this.provider.rawData.length; i++) {
                var obj = this.provider.rawData[i];
                if (obj.iata === value) {
                    this.fullCountryName = obj.name;
                    break;
                }
            }
            return this.fullCountryName;
        }
    };
    CountryRefactorPipe.prototype.getJSON = function () {
        return this.http
            .get(this._url)
            .map(function (response) { return response.json(); });
    };
    CountryRefactorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "isoToCountryName"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
    ], CountryRefactorPipe);
    return CountryRefactorPipe;
}());

//# sourceMappingURL=country.pipe.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeRefactorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeRefactorPipe = /** @class */ (function () {
    function TimeRefactorPipe() {
        this.character = ':';
        this.position = 2;
    }
    TimeRefactorPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value.length !== 4) {
            value = '0' + value;
        }
        return [value.slice(0, this.position), this.character, value.slice(this.position)].join('');
    };
    TimeRefactorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'timeRefactor'
        })
    ], TimeRefactorPipe);
    return TimeRefactorPipe;
}());

//# sourceMappingURL=time.pipe.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarouselComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(platform, eleRef) {
        this.platform = platform;
        this.eleRef = eleRef;
        this.currentDeg = 0;
        this.items = [];
        this.autoloop = false;
        this.selectSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        set: function (values) {
            if (!values.length)
                return;
            var degree = 0;
            if (this.platform.is('core') || this.platform.is('mobileweb')) {
                this.tz = 250;
            }
            else {
                this.tz = 200;
            }
            //this.tz = Math.round((this.containerWidth / 2) / Math.tan(Math.PI / values.length));
            this.items = values.map(function (item, index) {
                var slideItem = {
                    idx: index,
                    title: item.title,
                    description: item.description,
                    account: item.account,
                    imgUrl: item.imgUrl,
                    backgroundImgUrl: item.backgroundImgUrl,
                    color: item.color,
                    outstanding: item.outstanding,
                    currentPlacement: degree
                };
                degree = degree + 60;
                return slideItem;
            });
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("autoloop", this.autoloop); 
        if (this.autoloop) {
            var autoloopTask = setInterval(function () {
                _this.onSwipeLeft();
            }, 2000);
        }
    };
    CarouselComponent.prototype.onSwipeLeft = function () {
        this.currentDeg = this.currentDeg - 60;
        this.applyStyle();
    };
    CarouselComponent.prototype.onSwipeRight = function () {
        this.currentDeg = this.currentDeg + 60;
        this.applyStyle();
    };
    CarouselComponent.prototype.applyStyle = function () {
        var ele = this.eleRef.nativeElement.querySelector('.carousel');
        ele.style['-webkit-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['-moz-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['-o-transform'] = "rotateY(" + this.currentDeg + "deg)";
        ele.style['transform'] = "rotateY(" + this.currentDeg + "deg)";
    };
    CarouselComponent.prototype.selectItem = function (item) {
        var _this = this;
        this.applyResizeStyle(item);
        setTimeout(function () {
            _this.resetResizeStyle(item);
            _this.selectSlide.emit(item);
        }, 2000);
    };
    CarouselComponent.prototype.applyResizeStyle = function (item) {
        var ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);
        ele.style['animation-name'] = "resize";
        ele.style['animation-duration'] = "1s";
        ele.style['animation-timing-function'] = "ease-in-out";
        ele.style['animation-iteration-count'] = "1";
        ele.style['-webkit-animation-name'] = "resize";
        ele.style['-webkit-animation-duration'] = "1s";
        ele.style['-webkit-animation-timing-function'] = "ease-in-out";
        ele.style['-webkit-animation-iteration-count'] = "1";
        ele.style['-moz-animation-name'] = "resize";
        ele.style['-moz-animation-duration'] = "1s";
        ele.style['-moz-animation-timing-function'] = "ease-in-out";
        ele.style['-moz-animation-iteration-count'] = "1";
        ele.style['-o-animation-name'] = "resize";
        ele.style['-o-animation-duration'] = "1s";
        ele.style['-o-animation-timing-function'] = "ease-in-out";
        ele.style['-o-animation-iteration-count'] = "1";
    };
    CarouselComponent.prototype.resetResizeStyle = function (item) {
        var ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);
        ele.style['animation-name'] = "";
        ele.style['-webkit-animation-name'] = "";
        ele.style['-moz-animation-name'] = "";
        ele.style['-o-animation-name'] = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "autoloop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CarouselComponent.prototype, "slides", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "selectSlide", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/components/carousel/carousel.html"*/'<!-- Generated template for the CarouselComponent component -->\n\n\n<div class="carousel-container">\n    <div class="carousel">\n      <div radio-group class="carousel-slide-item slide-item-{{i}}" *ngFor="let item of items; let i=index"\n           [style.background-color]="item.color"\n           [ngStyle]="{\'transform\': \'rotateY(-\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\', \'-webkit-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\', \'-ms-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\',\n          \'-o-transform\': \'rotateY(\'+item.currentPlacement+\'deg)  translateZ(\'+tz+\'px)\'}"\n           (swipeleft)="onSwipeLeft($event);"\n           (swiperight)="onSwipeRight($event);"\n              >\n  \n          <ion-card >\n              <ion-card-content>\n                  <ion-card-title>\n                      {{item.title}}\n                      <p>{{item.account}}</p>\n                  </ion-card-title>\n              </ion-card-content>\n          </ion-card>\n      </div>\n    </div>\n  </div>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/components/carousel/carousel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CarouselComponent);
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingService = /** @class */ (function () {
    function BookingService(http, provider) {
        this.http = http;
        this.provider = provider;
    }
    BookingService.prototype.booking = function (UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade) {
        console.log(UserID, FlightID, OfferNamePricing, OfferTypePricing, CostPricing, OfferNameUpgrade, OfferTypeUpgrade, CostUpgrade);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                Authorization: this.provider.token
            })
        });
        var link = this.provider.apiUrl.book;
        var bodyObject = {
            UserID: UserID,
            FlightID: FlightID,
            OfferNamePricing: OfferNamePricing,
            OfferTypePricing: OfferTypePricing,
            CostPricing: CostPricing,
            OfferNameUpgrade: OfferNameUpgrade,
            OfferTypeUpgrade: OfferTypeUpgrade,
            CostUpgrade: CostUpgrade
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http
            .post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    BookingService.prototype.listBookingByUser = function (ID) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json",
                Authorization: this.provider.token
            })
        });
        var link = this.provider.apiUrl.listBookingByUser + "/" + String(ID);
        return this.http
            .get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || "Server error");
        });
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], BookingService);
    return BookingService;
}());

//# sourceMappingURL=booking.component.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Profile picture -->\n  <div text-center>\n    <img src="../assets/avatar.png" class="edit-avatar" alt="">\n  </div>\n\n  <!-- Form -->\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start color="tab"></ion-icon>\n      {{provider.userData.FirstName + \' \'}} {{provider.userData.LastName + \' \'}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="body" item-start color="tab"></ion-icon>\n      {{provider.userData.Age}}  years\n    </ion-item>\n    <ion-item>\n      <ion-icon name="at" item-start color="tab"></ion-icon>\n      {{provider.userData.Email}} \n    </ion-item>\n    <ion-item>\n      <ion-icon name="call" item-start color="tab"></ion-icon>\n      {{provider.userData.Mobile}}  \n    </ion-item>\n  </ion-list>\n\n\n  <!-- Private information form -->\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n</footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_offers__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, provider, checkinService, bookingService, alertCtrl, loadingCtrl, allservicesService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.checkinService = checkinService;
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.modalCtrl = modalCtrl;
        this.show = null;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (dataID) {
            _this.show = dataID[0];
            console.log("data isssssssss", _this.show);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    AboutPage.prototype.pay = function (id, price, product) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__offers_offers__["a" /* OffersPage */], { userId: { id: id, price: price, product: product } });
        profileModal.present();
    };
    AboutPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (dataID) {
            _this.show = dataID[0];
            console.log("data isssssssss", _this.show);
            refresher.complete();
        }, function (error) {
            refresher.complete();
        });
        setTimeout(function () {
            console.log("Async operation has ended");
            refresher.complete();
        }, 7000);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-about",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/about/about.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Bills</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="masters">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf="show">\n    <ion-list>\n      <ng-container *ngFor="let card of show.Billing">\n        <ion-item *ngIf="card.Payed===false">\n          <ion-thumbnail item-start *ngIf="card.Product===\'Home Entertainment\' && card.Payed ===false">\n            <img src="assets/etisalat.png" height="10" width="10">\n          </ion-thumbnail>\n          <ion-thumbnail item-start *ngIf="card.Product===\'Water And Electricity\' && card.Payed ===false">\n            <img src="assets/dewa.png" height="10" width="10">\n          </ion-thumbnail>\n          <ion-thumbnail item-start *ngIf="card.Product===\'Phone\' && card.Payed ===false">\n            <img src="assets/du.png" height="10" width="10">\n          </ion-thumbnail>\n          <h2 *ngIf="card.Payed ===false" >{{card.Product}}</h2>\n          <p *ngIf="card.Payed ===false" >{{card.Price}} DHS</p>\n          <button ion-button clear item-end *ngIf="card.Payed===false" (click)="pay(card._id,card.Price, card.Product)">\n            Pay</button>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </ng-container>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_3__services_checkin_service_checkin_component_service__["a" /* CheckinService */],
            __WEBPACK_IMPORTED_MODULE_4__services_booking_service_booking_component_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__provider_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, listingService, alertCtrl, loadingCtrl, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.cards = [
            {
                state: 'ON',
                logo: "assets/visa.png",
                a: 1234,
                b: 5522,
                c: 8432,
                d: 2264,
                expires: '9000',
                bank: 'Cumulus Bank'
            },
            {
                state: 'OFF',
                logo: "assets/american.png",
                a: 1234,
                b: 5321,
                c: 8283,
                d: 9271,
                expires: '8000',
                bank: 'Cumulus Bank'
            },
            {
                state: 'ON',
                logo: "assets/mastercard.png",
                a: 8685,
                b: 2445,
                c: 9143,
                d: 7846,
                expires: '7000',
                bank: 'Cumulus Bank'
            }
        ];
    }
    HomePage.prototype.update = function (ID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.activate(ID).subscribe(function (data) {
            _this.allservicesService.getAccountByID(_this.provider.userData["UserID"]).subscribe(function (dataID) {
                _this.data = dataID[0];
                console.log("data newww", _this.data);
                loading.dismiss();
            }, function (error) {
                loading.dismiss();
            });
        }, function (error) {
            loading.dismiss();
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation');
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (dataID) {
            _this.data = dataID[0];
            console.log("data isssssssss", _this.data);
            refresher.complete();
        }, function (error) {
            refresher.complete();
        });
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        // }, 2000);
    };
    HomePage.prototype.go = function (acc, balance) {
        console.log("heree", acc, balance, this.data['Transaction']);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */], { data: {
                acc: acc,
                balance: balance,
                tx: this.data['Transaction']
            } });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("vieww neter");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (dataID) {
            _this.data = dataID[0];
            console.log("data isssssssss", _this.data);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">My Account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n      <ion-list>\n          <ng-container *ngIf="data">\n          <ion-item-sliding no-padding margin-bottom *ngFor="let card of data.Account">\n            <ion-item no-padding lines="none">\n              <ion-grid [class.cardON]="card.Activate===true" [class.cardOFF]="card.Activate===false">\n                <ion-row>\n                  <ion-col class="state">\n                    <div class="msg" (click)="go(card.AccountName, card.Balance)">\n                      <span [class.ON]="card.Activate===true" [class.OFF]="card.Activate===false"></span> \n                      <ng-container *ngIf="card.Activate===true" >\n                      Active\n                      </ng-container>\n                      <ng-container *ngIf="card.Activate===false">\n                          Inactive\n                          </ng-container>\n                    </div>\n                  </ion-col>\n                  <ion-col class="logo" *ngIf="card.AccountName===\'Visa Card\'">\n                    <img class="brand" src="assets/visa.png"  height="30" width="80">\n                  </ion-col>\n                  <ion-col class="logo" *ngIf="card.AccountName===\'American Express\'">\n                      <img class="brand" src="assets/american.png"  height="30" width="80">\n                    </ion-col>\n                    <ion-col class="logo" *ngIf="card.AccountName===\'Master Card\'">\n                        <img class="brand" src="assets/mastercard.png"  height="30" width="80">\n                      </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class="chip">\n                    <img src="assets/chip.png"  height="40" width="50">\n                  </ion-col>\n                </ion-row>\n                <ion-row class="digits">\n                  <ion-col class="number">\n                    123\n                  </ion-col>\n                  <ion-col class="number">\n                    4567\n                  </ion-col>\n                  <ion-col class="number">\n                   567\n                  </ion-col>\n                  <ion-col class="number">\n                    5678\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class="date">\n                    Balance: {{card.Balance}}\n                  </ion-col>\n                  <ion-col class="bank">\n                    cumulus\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item-options padding side="end" color="white" (click)="update(card._id)">\n              <ion-icon id="power" color="primary" name="power"></ion-icon>\n            </ion-item-options>\n          </ion-item-sliding>\n          </ng-container>\n        </ion-list>\n\n    </ion-content>\n  <ion-footer no-border>\n\n    <footer>\n      <p class="copyright">© IBM 2019 </p>\n  </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_listing_schedule_service_listing_component_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            __WEBPACK_IMPORTED_MODULE_5__provider_provider__["a" /* Provider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = navParams.get("item");
        console.log(this.values);
    }
    MapPage.prototype.ionViewDidEnter = function () { };
    MapPage.prototype.loadmap = function () {
        var locations = [
            ["CUMULUS, Abu Dhabhi Branch", 24.4539, 54.3773],
            ["CUMULUS, Dubai Branch", 25.2048, 55.2778],
            ["CUMULUS, Ajman Branch", 25.4052, 55.5136],
            ["CUMULUS, Sharjah Branch", 25.4111, 56.2482],
            ["CUMULUS, RAK Branch", 25.6741, 55.9804]
        ];
        var map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map('map').setView([24.4539, 54.3773], 7);
        var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
        }).addTo(map);
        for (var i = 0; i < locations.length; i++) {
            var marker = new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([locations[i][1], locations[i][2]])
                .bindPopup(locations[i][0])
                .addTo(map);
        }
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadmap();
    };
    MapPage.prototype.goback = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MapPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
    };
    MapPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-map",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hide-tabs>\n  <ion-toolbar>\n    <ion-buttons start>\n       \n        <button ion-button left class="loginnavbtn" (click)="goback()">\n            <ion-icon name="arrow-back" color="icon"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title color="primary">Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>\n\n<ion-footer no-border>\n\n  <footer>\n    <p class="copyright">© IBM 2019 </p>\n  </footer>\n\n</ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_allservices_allservices_component_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopPage = /** @class */ (function () {
    function ShopPage(navCtrl, navParams, allservicesService, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allservicesService = allservicesService;
        this.provider = provider;
        this.odm = [];
        this.visaOffers = [];
        this.masterOffers = [];
        this.amexOffers = [];
    }
    ShopPage.prototype.call = function () {
        var _this = this;
        this.masterOffers = [];
        this.visaOffers = [];
        this.amexOffers = [];
        this.allservicesService.getAccountByID(this.provider.userData["UserID"]).subscribe(function (data) {
            data[0]['Account'].forEach(function (element) {
                console.log(element);
                if (element['Activate']) {
                    if (element['AccountName'] === 'Visa Card') {
                        _this.allservicesService.odm('Visa', 'Gold', 10517320, '', '', []).subscribe(function (visadata) {
                            _this.visaOffers.push({
                                type: 'visa',
                                offers: visadata['creditCard']['cardOffers']
                            });
                            _this.visaOffers = _this.visaOffers[0];
                            console.log(_this.visaOffers);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    if (element['AccountName'] === 'Master Card') {
                        _this.allservicesService.odm('MasterCard', 'World', 10517320, '', '', []).subscribe(function (masterdata) {
                            _this.masterOffers.push({
                                type: 'master',
                                offers: masterdata['creditCard']['cardOffers']
                            });
                            _this.masterOffers = _this.masterOffers[0];
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    if (element['AccountName'] === 'American Express') {
                        _this.allservicesService.odm('AMEX', 'Preferred', 10517320, '', '', []).subscribe(function (americandata) {
                            _this.amexOffers.push({
                                type: 'amex',
                                offers: americandata['creditCard']['cardOffers']
                            });
                            _this.amexOffers = _this.amexOffers[0];
                            console.log(_this.amexOffers);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            });
        }, function (error) {
        });
    };
    ShopPage.prototype.ionViewDidLoad = function () {
        this.call();
    };
    ShopPage.prototype.doRefresh = function (refresher) {
        this.call();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/shop/shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content  class="cards-bg">\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n    <ion-item-divider color="light">Visa Card Offers</ion-item-divider>\n    <ion-card class="adv-map" *ngFor="let item of visaOffers.offers">\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n        <h2>Catagory</h2>\n        <p>{{item.category}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n        <h2>Partner</h2>\n        <p>{{item.offerPartner}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n        <h2>Offer</h2>\n        <p> {{item.offerDesc}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n        <h2>Type</h2>\n        <p>{{item.offerType}}</p>\n      </ion-item>\n      <ion-item actions>\n        <button ion-button color="secondary" clear item-end icon-start>\n          <ion-icon name=\'checkmark\'></ion-icon>\n          BUY\n        </button>\n      </ion-item>\n      </ion-card>\n\n      <ion-item-divider color="light">Master Card Offers</ion-item-divider>\n      <ion-card class="adv-map" *ngFor="let item of masterOffers.offers">\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n          <h2>Catagory</h2>\n          <p>{{item.category}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n          <h2>Partner</h2>\n          <p>{{item.offerPartner}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n          <h2>Offer</h2>\n          <p> {{item.offerDesc}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n          <h2>Type</h2>\n          <p>{{item.offerType}}</p>\n        </ion-item>\n        <ion-item actions>\n          <button ion-button color="secondary" clear item-end icon-start>\n            <ion-icon name=\'checkmark\'></ion-icon>\n            BUY\n          </button>\n        </ion-item>\n        </ion-card>\n\n        <ion-item-divider color="light">AMEX Card Offers</ion-item-divider>\n        <ion-card class="adv-map" *ngFor="let item of amexOffers.offers">\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n            <h2>Catagory</h2>\n            <p>{{item.category}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flower\'></ion-icon>\n            <h2>Partner</h2>\n            <p>{{item.offerPartner}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flash\'></ion-icon>\n            <h2>Offer</h2>\n            <p> {{item.offerDesc}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-icon color="subtle" large item-start name=\'flag\'></ion-icon>\n            <h2>Type</h2>\n            <p>{{item.offerType}}</p>\n          </ion-item>\n          <ion-item actions>\n            <button ion-button color="secondary" clear item-end icon-start>\n              <ion-icon name=\'checkmark\'></ion-icon>\n              BUY\n            </button>\n          </ion-item>\n          </ion-card>\n  \n  </ion-content>\n\n  <ion-footer no-border>\n  \n    <footer>\n      <p class="copyright"> Made by © IBM 2019 </p>\n    </footer>\n  \n  </ion-footer>'/*ion-inline-end:"/Users/saifurrehman/Desktop/POCs/cumulus-bank/Mobile-App-mariadb/src/pages/shop/shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_allservices_allservices_component_service__["a" /* AllservicesService */],
            __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map