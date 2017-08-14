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
import { Register } from '../../pages/register/register';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.swipeEnable(false);
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.signup = function () {
        this.navCtrl.push(Register);
    };
    Login.prototype.login = function () {
        this.navCtrl.setRoot(Dashboard);
    };
    Login.prototype.ionViewDidLeave = function () {
        // this.app.getComponent('leftMenu').enable(true);
        this.menuCtrl.swipeEnable(true);
    };
    Login.prototype.forgotPassword = function () {
        this.navCtrl.push(ForgotPassword);
    };
    return Login;
}());
Login = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController])
], Login);
export { Login };
//# sourceMappingURL=login.js.map