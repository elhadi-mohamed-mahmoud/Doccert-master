import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowcertifRecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcertif-recipient',
  templateUrl: 'showcertif-recipient.html',
})
export class ShowcertifRecipientPage {
 cert:any;
  myInfo = {
 
    name:'', 
    email:'', 
    subject:'', 
    date:'', 
    deiscription:'', 
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 this.cert=this.navParams.get('result');
      console.log(this.cert);
      console.log(this.cert.length);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcertifRecipientPage');
  }

   home(){ 
     console.log('ewa')
     // this.navCtrl.push(HomePage)

   }

}
