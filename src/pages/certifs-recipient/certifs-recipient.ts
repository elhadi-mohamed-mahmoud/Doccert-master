import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { AuthRecipientProvider } from '../../providers/auth-recipient/auth-recipient';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/File/ngx';

/**
 * Generated class for the CertifsRecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certifs-recipient',
  templateUrl: 'certifs-recipient.html',
})
export class CertifsRecipientPage {
loading: any;
  email: string = '';
  cert:any;
  text = 'hello';
  url = 'https://www.doccerts.com/';





  constructor(
			    public navCtrl: NavController,
			    public loadingCtrl: LoadingController, 
			    public authService: AuthRecipientProvider , 
			    public alertCtrl: AlertController,
			    public navParam: NavParams,
			    // private socialSharing: SocialSharing,
			    private file: File )
    {

	      this.cert=this.navParam.get('result');
	      console.log(this.cert);
	      // console.log(this.cert.length);    
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsidePage');
     
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


  onEdit( id, name, email, subject, date, deiscription){  
  }
  

  submit(){

  }
  
  // share(){
		//     this.socialSharing.canShareViaEmail().then((res) => {
		//       console.log(" Success")
		//     }).catch((e) => {
		//       // Error!
		//     });  
  // }

  onDelete(id){

  }

  show(c){
    console.log(c)
    console.log('holaa')
   // this.navCtrl.push(ShowPage,{c:c});
  }


ionViewDidEnter() {	}

}
