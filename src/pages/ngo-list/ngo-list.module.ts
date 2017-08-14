import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgoList } from './ngo-list';

@NgModule({
  declarations: [
    NgoList,
  ],
  imports: [
    IonicPageModule.forChild(NgoList),
  ],
  exports: [
    NgoList
  ]
})
export class NgoListModule {}
