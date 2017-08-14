var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Onboarding } from '../pages/onboarding/onboarding';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { UpdateProfile } from '../pages/update-profile/update-profile';
import { MapView } from '../pages/map-view/map-view';
import { ChangePassword } from '../pages/change-password/change-password';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { SendDonation } from '../pages/send-donation/send-donation';
import { ViewNgo } from '../pages/view-ngo/view-ngo';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { Logout } from '../pages/logout/logout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HelloIonicPage,
            ItemDetailsPage,
            ListPage,
            Onboarding,
            Login,
            Register,
            Dashboard,
            UpdateProfile,
            MapView,
            ChangePassword,
            ForgotPassword,
            SendDonation,
            ViewNgo,
            HomePage,
            Logout
        ],
        imports: [
            BrowserModule, HttpModule,
            IonicModule.forRoot(MyApp),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HelloIonicPage,
            ItemDetailsPage,
            ListPage,
            Onboarding,
            Login,
            Register,
            Dashboard,
            UpdateProfile,
            MapView,
            ChangePassword,
            ForgotPassword,
            SendDonation,
            ViewNgo,
            HomePage,
            Logout
        ],
        providers: [GoogleMaps,
            StatusBar,
            SplashScreen,
            Geolocation,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map