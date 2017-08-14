import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { DonationListProvider } from '../../providers/donation-list/donation-list';


/**
 * Generated class for the DonationList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html',
})
export class DonationList {
isAndroid: boolean = false;
donations: String = "nonprofit";
donationlistInfo:any=[];
donationgiftlistInfo:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform,public donationlistprovider: DonationListProvider) {
  this.isAndroid = platform.is('android');
  this.DonationList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationList');
  }
  DonationList(){
      this.donationlistprovider.DonationList().subscribe(users => {
      this.donationlistInfo=users.donation_detail;
     },
   err =>{
   
    this.donationlistprovider.showErrorToast(err);
  })

}
  DonationListGift(){
      this.donationlistprovider.DonationList().subscribe(users => {
      this.donationgiftlistInfo=users.gift;
      console.log(this.donationgiftlistInfo);
     },
   err =>{
     this.donationlistprovider.showErrorToast(err);
  })

}

}
