import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
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

 sertifCredentials = {
					studID : '' ,
	          		studNaID: '',		
	          		certID:		'',
	          		DegreeID:	'',
	          		MajorID:	''	,
dateGrad:''
	};
registerCredentials= {}

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
    		  public authService: AuthProvider ,
    		  public toastController:ToastController

  			  ) {


  	this.sertifCredentials.studID = 'heloo1';
  	this.sertifCredentials.studNaID = 'heloo2';
  	this.sertifCredentials.certID = 'heloo3';
  	this.sertifCredentials.dateGrad = 'heloo4';
  	this.sertifCredentials.DegreeID = 'heloo5';
  	this.sertifCredentials.MajorID = 'heloo6';
  	

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SertificatesPage');
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


  		getSertificats(){

  			this.authService.register(this.registerCredentials).then((result) => {
             console.log(result);
             

          }, (err) => {
            console.log(err);
            this.toastFunction("try again");
          });




  		}




}
