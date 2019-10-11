import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataModalPage } from './data-modal';

@NgModule({
  declarations: [
    DataModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DataModalPage),
  ],
})
export class DataModalPageModule {}
