import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { SertificatesPage } from '../sertificates/sertificates';
import { DataModalPage } from '../data-modal/data-modal';
import {Observable} from 'rxjs/Observable';



import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the CertifsNonSignedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certifs-non-signed',
  templateUrl: 'certifs-non-signed.html',
})
export class CertifsNonSignedPage {
public data: any;
id_signer: any ;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth : AuthProvider,
              private modal : ModalController,
              public authService: AuthProvider,
              public alertCtrl: AlertController
              ) {}

  ionViewDidLoad() : Observable<any>{
    console.log('ionViewDidLoad CertifsNonSignedPage');
   this.data = this.auth.getData();
    this.id_signer = this.data[0]['id_signer'];
   return this.data;
  }

/* Alert */
  errorFunc(message) {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

show(id_certificate) {
          console.log(id_certificate);
          this.authService.displayModal(id_certificate).then((result) => {
                      console.log("success");
                    }, (err) => {
                      console.log(err);
                      this.errorFunc('try again');
          });
}

isZero(etat){
  if (etat == 0){ return true;}
  return false;
}



estVide(){

  for(let d in this.data){
   let da = this.data[d];
      if(da['etat'] == 0){
        return false;
      }
  }
  return true;
}

ionRefresh(event) {
      console.log('Pull Event Triggered!');
      setTimeout(() => {
        console.log('Async operation has ended');
        this.auth.getUpdate(this.id_signer); 
         this.data = this.auth.getData();
        //complete()  signify that the refreshing has completed and to close the refresher
        event.complete();
      }, 1000);
      return this.data;
  }
}
