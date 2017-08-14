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
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Login } from '../../pages/login/login';
/**
 * Generated class for the Onboarding page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Onboarding = (function () {
    function Onboarding(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.swipeEnable(false);
    }
    Onboarding.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Onboarding');
    };
    Onboarding.prototype.loadLogin = function () {
        this.navCtrl.setRoot(Login);
    };
    Onboarding.prototype.ionViewDidLeave = function () {
        // this.app.getComponent('leftMenu').enable(true);
        this.menuCtrl.swipeEnable(true);
    };
    return Onboarding;
}());
Onboarding = __decorate([
    IonicPage(),
    Component({
        selector: 'page-onboarding',
        templateUrl: 'onboarding.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController])
], Onboarding);
export { Onboarding };
//# sourceMappingURL=onboarding.js.map