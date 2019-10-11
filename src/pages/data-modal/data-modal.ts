import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ViewController } from 'ionic-angular';



import { AuthProvider } from '../../providers/auth/auth';


import { SertificatesPage } from '../sertificates/sertificates';

/**
 * Generated class for the DataModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-modal',
  templateUrl: 'data-modal.html',
})
export class DataModalPage implements OnInit {
	data : any;
id_certif: string;
id_signer: any;
  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public view: ViewController,
          public authProvider :AuthProvider,
          public alertCtrl : AlertController

  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataModalPage');
    this.data = this.navParams.get('elementData');
    console.log(this.data);

  }

  ngOnInit(): void {
  	this.data = this.navParams.get('elementData');
    console.log(this.data);
  }

closeModal(){

	this.view.dismiss();
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

sign(id_certif,id_signer){

console.log(id_certif,id_signer);

let cred ={
   id_certif,
 id_signer
};
console.log(cred);
this.authProvider.Mysign(cred).then((result) =>{
  console.log(result);
  this.closeModal();
  let op= this.authProvider.ChangeEtat(id_certif);
  console.log(op);
}, (err) => {
            console.log(err);
            this.errorFunc('try again');
});
}



}
