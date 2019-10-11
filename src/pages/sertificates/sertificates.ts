import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


import { LoginPage } from '../login/login';

import {Observable} from 'rxjs/Observable';


/**
 * Generated class for the SertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-sertificates',
  templateUrl: 'sertificates.html',
})
export class SertificatesPage {
data: any;
id_signer: any ;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
    		  public authService: AuthProvider ,
    		  public toastController:ToastController

  			  ) {}

  ionViewDidLoad() : Observable<any>{
    console.log('ionViewDidLoad SertificatesPage');
    // console.log(this.navParams.get('result'));
    // this.data = this.navParams.get('result');
       this.data = this.authService.getData();
       this.id_signer = this.data[0]['id_signer'];
       return this.data;
         }


show(element) {

console.log(element);
this.authService.displayModal(element);
}

// toast 
  toastFunction(message){
    let addTodoToast= this.toastController.create({
            message:  message,
            duration: 5000,
            position: 'down',
          }); 
            addTodoToast.present();    
  }


ionRefresh(event) {
      console.log('Pull Event Triggered!');
      setTimeout(() => {
        console.log('Async operation has ended');
        this.authService.getUpdate(this.id_signer); 
         this.data = this.authService.getData();
        //complete()  signify that the refreshing has completed and to close the refresher
        event.complete();
      }, 1000);
      return this.data;
  }


}
