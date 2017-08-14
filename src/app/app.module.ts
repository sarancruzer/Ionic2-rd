import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { Onboarding } from '../pages/onboarding/onboarding';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { UpdateProfile } from '../pages/update-profile/update-profile';
import { ChangePassword } from '../pages/change-password/change-password';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { SendDonation } from '../pages/send-donation/send-donation';
import { ViewNgo } from '../pages/view-ngo/view-ngo';
import { Geolocation } from '@ionic-native/geolocation';
import { Logout } from '../pages/logout/logout';
import { Search } from '../pages/search/search';
import { NgoList } from '../pages/ngo-list/ngo-list';
import { DonationList } from '../pages/donation-list/donation-list';
import { LoginProvider } from '../providers/login-provider';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterProvider } from '../providers/register/register';
import { DonationListProvider } from '../providers/donation-list/donation-list';


@NgModule({
  declarations: [
    MyApp,
    Onboarding,
    Login,
    Register,
    Dashboard,
    UpdateProfile,
    ChangePassword,
    ForgotPassword,
    SendDonation,
    ViewNgo,    
    Logout,
    Search,
    NgoList,
    DonationList
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Onboarding,
    Login,
    Register,
    Dashboard,
    UpdateProfile,
    ChangePassword,
    ForgotPassword,
    SendDonation,
    ViewNgo,
    Logout,
    Search,
    NgoList,
    DonationList
  ],
  providers: [
    StatusBar,
    LoginProvider,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterProvider,
    DonationListProvider
  ]
})
export class AppModule {}
