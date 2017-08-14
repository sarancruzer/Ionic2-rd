import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { Onboarding } from '../pages/onboarding/onboarding';
import { Login } from '../pages/login/login';
//import { Register } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { UpdateProfile } from '../pages/update-profile/update-profile';
import { ChangePassword } from '../pages/change-password/change-password';
//import { ForgotPassword } from '../pages/forgot-password/forgot-password';
//import { SendDonation } from '../pages/send-donation/send-donation';
//import { ViewNgo } from '../pages/view-ngo/view-ngo';
import { Logout } from '../pages/logout/logout';
import { NgoList } from '../pages/ngo-list/ngo-list';
import { DonationList } from '../pages/donation-list/donation-list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page

  rootPage = Onboarding;
  pages: Array<{myIcon:string,title: string, component: any}>;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { myIcon:'fa fa-list-alt',title: 'NGO List', component: NgoList },
      { myIcon:'fa fa-map',title: 'Map View', component: Dashboard },      
      { myIcon:'fa fa-file-text-o',title: 'Donations List', component: DonationList },     
      { myIcon:'fa fa-user',title: 'Update Profile', component: UpdateProfile },
      { myIcon:'fa fa-unlock-alt',title: 'Change Password', component: ChangePassword },
      { myIcon:'fa fa-sign-in',title: 'Login', component: Login },
      { myIcon:'fa fa-power-off',title: 'Logout', component: Logout }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
