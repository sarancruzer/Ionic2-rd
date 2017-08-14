import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { SendDonation } from '../../pages/send-donation/send-donation';
import { Search } from '../../pages/search/search';
import { DonationListProvider } from '../../providers/donation-list/donation-list';

/**
 * Generated class for the NgoList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ngo-list',
  templateUrl: 'ngo-list.html',
})
export class NgoList {
  ngolistInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public donationlistprovider: DonationListProvider,public popoverCtrl: PopoverController) {
  this.ngoListInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoList');
  }
viewngo(){
	this.navCtrl.push(SendDonation);
}
ngoListInfo(){
      this.donationlistprovider.ngoListInfo().subscribe(users => {
      this.ngolistInfo=users.data;
     },
   err =>{
   
    this.donationlistprovider.showErrorToast(err);
  })
}
presentActionSheet(myEvent) {
     let popover = this.popoverCtrl.create(Search);
    popover.present({
      ev: myEvent
    });
  }
}
