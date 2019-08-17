import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
public token: any;


  constructor(public storage: Storage , public http: Http ) {
    console.log('Hello AuthProvider Provider');
  }





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
            this.storage.set('token', data.token);
            resolve(data);
   }, (err) => {
            reject(err);
          
          });  });
 
  }
}
