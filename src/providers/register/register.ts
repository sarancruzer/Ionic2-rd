import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterProvider {
headers:any;
list:any;


 imageUrl="http://183.82.33.232:8095/realneeds/"; 
  rooturl=this.imageUrl+"api/user/";
  constructor(public http: Http,public toastCtrl: ToastController) {
    console.log('Hello RegisterProvider Provider');
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
  updateRegister(donor_name,email,mobile,username,password,confirmpassword){
  	 this.list ={
        "contact_name":donor_name,
        "email":email,
        "phone":mobile,
        "username":username,
        "password":password,
        "confirm_password":confirmpassword
      }
   return this.http.post(`${this.rooturl}donor_signup`,this.list,this.headers)
      .map(res =>res.json());

  }
  }


