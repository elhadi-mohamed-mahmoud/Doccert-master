import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginRecipientPage } from '../login-recipient/login-recipient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


welcome2(){

	this.navCtrl.push("LoginPage");
}
welcome1(){

	this.navCtrl.push("LoginRecipientPage");
}

}
