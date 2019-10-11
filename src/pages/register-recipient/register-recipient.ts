import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, LoadingController} from 'ionic-angular';

import { AuthRecipientProvider } from '../../providers/auth-recipient/auth-recipient';
import { LoginRecipientPage } from '../login-recipient/login-recipient';

/**
 * Generated class for the RegisterRecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-recipient',
  templateUrl: 'register-recipient.html',
})
export class RegisterRecipientPage {
username:string = '';
  adress:string = '';
  lname:string = '';
  password:string = '';
  password2:string = '';
  email:string = '';
  telephone:Number;
  NatId: Number = 0;
  birthday:Date ;
  errorMsg:string;
  loading: any;
  sexe:String='man';


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController, 
    public authService: AuthRecipientProvider ,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
  
    this.loading.present();
  
  }




  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



  myRegister(){
    if (this.email.trim() !== '' &&  this.username.trim() !==''    ) {    
 
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
      }else{
        if(this.password !== this.password2){
        this.errorFunc("passwords don't match")
      }else{
         
 
            let credentials = {
              email: this.email,
              username: this.username,
              lname: this.lname,
              password: this.password,
              NatId:this.NatId,
              birthday:this.birthday,
              tele:this.telephone,
              adress:this.adress,
              sexe:this.sexe,
        };
        

        this.showLoader();
        
        this.authService.createAccount(credentials).then((result) => {
          console.log(result);
          if (result == "NatId déja existant") {
            this.errorFunc('NatId déja existant') 
          }
          else{
          this.loading.dismiss();
          this.navCtrl.setRoot(LoginRecipientPage);          
      }}, (err) => {
          console.log(err);
          this. errorFunc('Wrong credentials ! try again')
      });
      }}    
   }
   else{
    
    this. errorFunc('Compelet all the fields !  ')
   
    } 
}
}
