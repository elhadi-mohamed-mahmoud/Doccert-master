import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController, LoadingController } from 'ionic-angular';


import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { SertificatesPage } from '../sertificates/sertificates';
import { CertifsNonSignedPage } from '../certifs-non-signed/certifs-non-signed';
import { AllCertifPage } from '../all-certif/all-certif';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 email: string = '';
  password: string = '';
  private: string = '';

  errorMsg: string;

  loading: any;

  file: any;

  constructor(private toastController: ToastController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public alertCtrl: AlertController) {
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
// toast 
  toastFunction(message){
    let addTodoToast= this.toastController.create({
            message:  message,
            duration: 5000,
            position: 'down'

          }); 
            addTodoToast.present();    
  }



  myLogIn() {

    if (this.email.trim() !== '') {
      if (this.password.trim() === '') {
        this.errorFunc('Please put your password')
      } else {
        // let fileReader = new FileReader();
        // fileReader.onload = (e) => {
          let credentials = {
            email: this.email,
            password: this.password,
            // private: fileReader.result
          };
          console.log(credentials);

          this.showLoader();

          this.authService.login(credentials).then((result) => {
            console.log(result);
            // var obj = JSON.parse(result.toString());
            this.loading.dismiss();
            if(result==0){
              this.toastFunction("User desn't exist");
              }else if(result != null){
                      this.authService.setData(result)                 
                      this.navCtrl.setRoot(AllCertifPage,{result:result});
                    }        

          }, (err) => {
            console.log(err);
            this.errorFunc('try again');
            this.loading.dismiss();

          });
        // }
        // fileReader.readAsText(this.file);
      }
    }
    else {
      this.toastFunction("Please put your email and password");    }
  }

}
