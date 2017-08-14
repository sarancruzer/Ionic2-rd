import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendDonation } from './send-donation';

@NgModule({
  declarations: [
    SendDonation,
  ],
  imports: [
    IonicPageModule.forChild(SendDonation),
  ],
  exports: [
    SendDonation
  ]
})
export class SendDonationModule {}
