import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SertificatesPage } from './sertificates';

@NgModule({
  declarations: [
    SertificatesPage,
  ],
  imports: [
    IonicPageModule.forChild(SertificatesPage),
  ],
})
export class SertificatesPageModule {}
