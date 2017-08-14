var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendDonation } from '../../pages/send-donation/send-donation';
/**
 * Generated class for the ViewNgo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewNgo = (function () {
    function ViewNgo(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "location";
    }
    ViewNgo.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewNgo');
    };
    ViewNgo.prototype.helpthem = function () {
        this.navCtrl.setRoot(SendDonation);
    };
    return ViewNgo;
}());
ViewNgo = __decorate([
    IonicPage(),
    Component({
        selector: 'page-view-ngo',
        templateUrl: 'view-ngo.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ViewNgo);
export { ViewNgo };
//# sourceMappingURL=view-ngo.js.map