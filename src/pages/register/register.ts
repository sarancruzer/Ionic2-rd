import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RegisterProvider } from '../../providers/register/register';


//import { Dashboard } from '../../pages/dashboard/dashboard';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
authForm : FormGroup;
submitAttempt:any;
donor_name:any;
email:any;
mobile:any;
username:any;
password:any;
confirmpassword:any;
mytype:string ="password";
  constructor(public navCtrl: NavController, public navParams: NavParams,public registerprovider: RegisterProvider,public menuCtrl: MenuController,public formBuilder: FormBuilder) {
  this.menuCtrl.enable(false);
     this.authForm = formBuilder.group({
      donor_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i),Validators.required])],
      mobile:  ['', Validators.compose([Validators.pattern('[0-9]*'),Validators.maxLength(12),Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmpassword: ['', Validators.compose([Validators.required])], 
    })
  }

  updateRegister(){
   if(!this.authForm.valid){
      this.submitAttempt = true;
     
    }
    else{
      this.submitAttempt = false;
      this.registerprovider.updateRegister(this.donor_name,this.email,this.mobile,this.username,this.password,this.confirmpassword).subscribe(users => {
      this.registerprovider.showToast(users.message);
     },
   err =>{
   
    this.registerprovider.showErrorToast(err);
  })
}
}

//   ionViewDidEnter() {
//     this.menuCtrl.enable(false);
//   }

//   ionViewWillLeave() {
//     this.menuCtrl.enable(true);
// }
 
}
