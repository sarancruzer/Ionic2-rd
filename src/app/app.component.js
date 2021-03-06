var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { Onboarding } from '../pages/onboarding/onboarding';
import { Dashboard } from '../pages/dashboard/dashboard';
import { UpdateProfile } from '../pages/update-profile/update-profile';
import { ChangePassword } from '../pages/change-password/change-password';
import { SendDonation } from '../pages/send-donation/send-donation';
import { ViewNgo } from '../pages/view-ngo/view-ngo';
import { HomePage } from '../pages/home/home';
import { Logout } from '../pages/logout/logout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = Onboarding;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Dashboard', component: Dashboard },
            { title: 'Update Profile', component: UpdateProfile },
            { title: 'Change Password', component: ChangePassword },
            { title: 'Send Donation', component: SendDonation },
            { title: 'View Ngo', component: ViewNgo },
            { title: 'Map', component: HomePage },
            { title: 'Logout', component: Logout }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        MenuController,
        StatusBar,
        SplashScreen])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map