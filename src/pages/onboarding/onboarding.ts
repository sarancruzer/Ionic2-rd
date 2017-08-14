import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { NgoList } from '../../pages/ngo-list/ngo-list';
/**
 * Generated class for the Onboarding page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class Onboarding {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  	this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Onboarding');
  }
  ngolist()
  {
     this.navCtrl.setRoot(NgoList);
  }
  ionViewDidLeave() {
   // this.app.getComponent('leftMenu').enable(true);
    this.menuCtrl.swipeEnable(true);
  }
}
