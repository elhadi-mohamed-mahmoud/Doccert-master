import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterRecipientPage } from './register-recipient';

@NgModule({
  declarations: [
    RegisterRecipientPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterRecipientPage),
  ],
})
export class RegisterRecipientPageModule {}
