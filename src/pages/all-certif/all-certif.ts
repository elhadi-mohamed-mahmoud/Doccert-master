import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { SertificatesPage } from '../sertificates/sertificates';
import { CertifsNonSignedPage } from '../certifs-non-signed/certifs-non-signed';

/**
 * Generated class for the AllCertifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-certif',
  templateUrl: 'all-certif.html',
})
export class AllCertifPage {
 tab1Root = SertificatesPage;
  tab2Root = CertifsNonSignedPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllCertifPage');
    // console.log(this.navParams.get('result'));
    // this.data = this.navParams.get('result');
  }

}
