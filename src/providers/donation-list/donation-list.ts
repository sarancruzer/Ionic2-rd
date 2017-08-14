import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the DonationListProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DonationListProvider {
headers:any;
list:any;
 imageUrl="http://183.82.33.232:8095/realneeds/"; 
  rooturl=this.imageUrl+"api/user/";
  constructor(public http: Http,public toastCtrl: ToastController) {
    console.log('Hello DonationListProvider Provider');
     this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
showToast(messageData){
    let toast = this.toastCtrl.create({
        message: messageData,
        position:"top",
        duration: 3000
      });
      toast.present();
   }

  showErrorToast(error){
    if(error.status===401){
      this.showToast(JSON.parse(error._body).error);
    }
    else{
      this.showToast("Please try again later");
    }
  }
  DonationList(){
  	 this.list ={
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUiLCJpYXQiOjE1MDIzNDE3NzUsImV4cCI6MTUwMjM1OTc3NX0.93paPU6VrTEPgUCoLdtbL72LTXq2Ums8FP9JQGFhavI"

      }
   return this.http.post(`${this.rooturl}donation_detail`,this.list,this.headers)
      .map(res =>res.json());

  }
  ngoListInfo(){
     this.list ={
      }
   return this.http.post(`${this.rooturl}filter`,this.list,this.headers)
      .map(res =>res.json());
  }
  }

