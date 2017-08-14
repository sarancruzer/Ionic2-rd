import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SendDonation } from '../../pages/send-donation/send-donation';
/**
 * Generated class for the ViewNgo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view-ngo',
  templateUrl: 'view-ngo.html',
})
export class ViewNgo {
pet:any="location";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNgo');
  }
  helpthem(){
  	this.navCtrl.setRoot(SendDonation)
  }
}
