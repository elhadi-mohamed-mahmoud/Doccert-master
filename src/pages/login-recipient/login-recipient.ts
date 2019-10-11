import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AuthRecipientProvider } from '../../providers/auth-recipient/auth-recipient';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginRecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-recipient',
  templateUrl: 'login-recipient.html',
})
export class LoginRecipientPage {


email: string = '';
password: string = '';
private: string = '';

errorMsg: string;

loading: any;

file: any;


  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public authService: AuthRecipientProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRecipientPage');
  }

  regi(){
   // this.navCtrl.push(RegisterPage);


  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }


  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

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


  home(){ 
    this.navCtrl.setRoot(HomePage); }



  myLogIn() {

    if (this.email.trim() !== '') {
      if (this.password.trim() === '') {
        this.errorFunc('Please put your password')
      } else {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          let credentials = {
            email: this.email,
            password: this.password,
            private: fileReader.result
          };
          console.log(credentials);

          this.showLoader();

          this.authService.login(credentials).then((result) => {
            console.log(result);
            this.loading.dismiss();
             this.authService.set(result);
             //this.navCtrl.setRoot( InsidePage,{result:result});

          }, (err) => {
            console.log(err);
            this.errorFunc('try again')
          });
        }
        fileReader.readAsText(this.file);
      }
    }
    else {
      this.errorFunc('Error ')
    }

  }

}
