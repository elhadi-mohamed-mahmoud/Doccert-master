import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRecipientPage } from './login-recipient';

@NgModule({
  declarations: [
    LoginRecipientPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRecipientPage),
  ],
})
export class LoginRecipientPageModule {}
