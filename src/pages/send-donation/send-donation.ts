import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../../pages/login/login';
/**
 * Generated class for the SendDonation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-donation',
  templateUrl: 'send-donation.html',
})
export class SendDonation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendDonation');
  }
  submitDonation()
  {
  	this.navCtrl.setRoot(Login);
  }
}
