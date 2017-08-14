import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationList } from './donation-list';

@NgModule({
  declarations: [
    DonationList,
  ],
  imports: [
    IonicPageModule.forChild(DonationList),
  ],
  exports: [
    DonationList
  ]
})
export class DonationListModule {}
