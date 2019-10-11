import { Component, ViewChild } from '@angular/core';
import { Platform,  Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { SertificatesPage } from '../pages/sertificates/sertificates';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CertifsNonSignedPage } from '../pages/certifs-non-signed/certifs-non-signed';
import { AllCertifPage } from '../pages/all-certif/all-certif';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { LoginRecipientPage } from '../pages/login-recipient/login-recipient';
import { RegisterRecipientPage } from '../pages/register-recipient/register-recipient';
import { CertifsRecipientPage } from '../pages/certifs-recipient/certifs-recipient';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CertifsRecipientPage;
  @ViewChild(Nav) navChild:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private deeplinks: Deeplinks) {
    
    platform.ready().then(() => {

   //    this.deeplinks.route({
   //   '/about-us': RegisterPage,
   //   '/products/:productId': RegisterPage
   // }).subscribe(match => {
   //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
   //   // match.$args - the args passed in the link
   //   // match.$link - the full link data
   //   console.log('Successfully matched route', match);
   // }, nomatch => {
   //   // nomatch.$link - the full link data
   //   console.error('Got a deeplink that didn\'t match', nomatch);
   // });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
   
  }

//the link should be in this format : doccertapp://doccert.com
//to pass the infos we should do it like this:  doccertapp://doccert.com?email=signer@gmail.com
     
  // deepFunc(){
  //   this.deeplinks.route({
          
  //       }).subscribe((match) => {
  //         console.log('Successfully routed', match);
  //         let urlData = JSON.stringify(match);
  //         this.navChild.push('RegisterPage', {data:urlData})
  //       }, (nomatch) => {
  //         console.log('Unmatched Route', nomatch);
  //       });
  // }
}

