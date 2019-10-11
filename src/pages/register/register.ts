import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ToastController, LoadingController} from 'ionic-angular';



import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';


import { Camera, CameraOptions } from '@ionic-native/camera';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';

import { finalize } from 'rxjs/operators';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  currentImage: any;
infos: any;
  errorMsg:string;
  loading: any;
createSuccess = false;
  registerCredentials = { email: '', password: '', confirmation_password: '', my_signature: '' };
       
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastController: ToastController,
    public loadingCtrl: LoadingController, 
    public authService: AuthProvider ,
    public alertCtrl: AlertController,
    private camera: Camera,
    private photoLibrary: PhotoLibrary
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

    this.infos = this.navParams.get('infos');
    console.log(this.infos);
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

// toast 
  toastFunction(message){
    let addTodoToast= this.toastController.create({
            message:  message,
            duration: 5000,
            position: 'down',
          }); 
            addTodoToast.present();    
  }

async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}


register()  {

if(this.registerCredentials.password === this.registerCredentials.confirmation_password) {

            console.log(this.registerCredentials);

           this.authService.register(this.registerCredentials).then((result) => {
             console.log(result);
            if(result===1){

              console.log("account created");
              this.toastFunction("account created");
              this.delay(5000);
               this.navCtrl.setRoot(LoginPage);

                        }
          else{
            console.log("there was an error !");  
            this.toastFunction("there was an error !");     
          }

          }, (err) => {
            console.log(err);
            this.toastFunction("try again");
            this.loading.dismiss();
          });
}

else {

       this.toastFunction("Your password does not match");

}
}


  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

console.log("Hi");
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log(imageData);

      this.registerCredentials.my_signature = imageData;
    }, (err) => {
      // Handle error
      console.log("Erreur about charging the image");
    });
  }



}
