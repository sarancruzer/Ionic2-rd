import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewNgo } from './view-ngo';

@NgModule({
  declarations: [
    ViewNgo,
  ],
  imports: [
    IonicPageModule.forChild(ViewNgo),
  ],
  exports: [
    ViewNgo
  ]
})
export class ViewNgoModule {}
