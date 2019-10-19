import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';

import { ShowcertifRecipientPage } from '../pages/showcertif-recipient/showcertif-recipient';
import { CertifsRecipientPage } from '../pages/certifs-recipient/certifs-recipient';
import { RegisterRecipientPage } from '../pages/register-recipient/register-recipient';
import { LoginRecipientPage } from '../pages/login-recipient/login-recipient';
import { SertificatesPage } from '../pages/sertificates/sertificates';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CertifsNonSignedPage } from '../pages/certifs-non-signed/certifs-non-signed';
import { AllCertifPage } from '../pages/all-certif/all-certif';
// import { DataModalPage } from '../pages/data-modal/data-modal';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http'; 
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Camera } from '@ionic-native/camera';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { AuthRecipientProvider } from '../providers/auth-recipient/auth-recipient';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // LoginPage,
    RegisterPage,
    SertificatesPage,
    CertifsNonSignedPage,
    AllCertifPage,
    //LoginRecipientPage,
    RegisterRecipientPage,
    CertifsRecipientPage,
    ShowcertifRecipientPage
    // DataModalPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    IonicStorageModule.forRoot(),
    HttpModule
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // LoginPage,
    RegisterPage,
    SertificatesPage,
    CertifsNonSignedPage,
    AllCertifPage,
    //LoginRecipientPage,
    RegisterRecipientPage,
    CertifsRecipientPage,
    ShowcertifRecipientPage
    // DataModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Camera,
    PhotoLibrary,
    File,
    WebView,
    FilePath,
    AuthRecipientProvider
  ]
})
export class AppModule {}
