import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';



import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';


import { DataModalPage } from '../../pages/data-modal/data-modal';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
public token: any;
public data: any;
elementData : any;
loading: any;
dataLength:any;

  constructor(public storage: Storage ,
              public http: Http ,
              private modal : ModalController,
              private loadingCtrl : LoadingController


              ) {
    console.log('Hello AuthProvider Provider');
  }


// the login of the signer
  login(credentials){
    console.log("cred", credentials);
    
    return new Promise((resolve, reject) => {
        let headers = new Headers();
       
       headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
 
        this.http.post(apiKey+'api/', JSON.stringify(credentials))
          .subscribe(res => {
            let data = res.json();
            JSON.stringify(data);
            this.token = data.token;
            this.dataLength = data.length;
            console.log(this.dataLength);
            this.storage.set('token', data.token);
            resolve(data);
   }, (err) => {
            reject(err);
          
          });  });
 
  }

//registration du signer

  register(credentials)  {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(apiKey+'api/create/', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }


//set the variable data that contains the data of certif to signe
    setData(data){
          this.data = data;
          console.log("set data");
          console.log(this.data);
        }

// this fonction is useful when we navigate to other page
    getData(){
          return this.data;
          }

showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

  }


async displayModal(id_certificate)
{

  this.data = this.getData();
  console.log(this.data);

  for(let d in this.data)
  {
      let dataH = this.data
    if(!(String(dataH[d]['id_certificate'])>String(id_certificate)) && !(String(dataH[d]['id_certificate'])<String(id_certificate)))
    {
       console.log(dataH[d]['id_certificate'])
        this.elementData = this.data[d];
        console.log(this.elementData);
    }

  }
      console.log(id_certificate);
      this.showLoader();
      console.log("Heeee me")
      const myModal =  this.modal.create('DataModalPage',{elementData: this.elementData})
      myModal.present();
      this.loading.dismiss();
}


Mysign(cred){

return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.showLoader();
        this.http.post(apiKey+'api/sign/', JSON.stringify(cred), {headers: headers})
          .subscribe(res => {
            resolve(res);
            this.loading.dismiss();
          }, (err) => {
            reject(err);
            this.loading.dismiss();
          });
    });

}

ChangeEtat(id_certificate){
  for(let d in this.data)
  {
      let dataH = this.data
    if(!(String(dataH[d]['id_certificate'])>String(id_certificate)) && !(String(dataH[d]['id_certificate'])<String(id_certificate)))
    {
       console.log(dataH[d]['id_certificate'])
        this.data[d]['etat'] = 1;
        console.log(this.data[d]['etat']);
        console.log(this.data[d]['id_certificate']);
        return true;
    }

  }
          return false;

}

getUpdate (id_signer){
let cred = {
  id_signer
}

console.log(cred);

return new Promise((resolve, reject) => {
  console.log("in update promise")
        let headers = new Headers();
       
       headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
 
        this.http.post(apiKey+'api/getupdate/', JSON.stringify(cred))
          .subscribe(res => {
              console.log("in update result")
            let dataUpdated = res.json();
            JSON.stringify(dataUpdated);
            // if(this.dataLength != dataUpdated.length){
            //   console.log("Different length")
            //       this.setData(dataUpdated);
            //       this.dataLength = dataUpdated.length
            // }
            this.setData(dataUpdated);
            resolve(dataUpdated);
   }, (err) => {
            reject(err);
          
          });  });
 

}



}
