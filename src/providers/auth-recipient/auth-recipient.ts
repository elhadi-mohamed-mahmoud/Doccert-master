import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiKey} from "../../app/apiurls/serverurls.js";

import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Http , Headers } from '@angular/http';


/*
  Generated class for the AuthRecipientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthRecipientProvider {

  public token: any;
  data:any;

  constructor(public storage: Storage , public http: Http) {
    console.log('Hello AuthRecipientProvider Provider');
  }

set(data){ this.data=data;}
   
get(){ return this.data; }


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
            console.log(data)
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
   }, (err) => {
            reject(err);
          
          });  });
 
  }

createAccount(details){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('Content-Type', 'application/json');
        
      console.log("avant")
        this.http.post(apiKey+'api/registration/', JSON.stringify(details))
          .subscribe(res => {
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
            console.log(data);
            
              
          }, (err) => {
            reject(err);
          });
    });
  }



}
