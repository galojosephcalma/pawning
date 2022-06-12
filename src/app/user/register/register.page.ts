import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fname: string = "";
  lname: string = "";
  username: string = "";
  password: string = "";
  constructor(
    public _apiService: ApiService,
    public toastCtrl: ToastController,
    private router: Router
  ) { }

  async addUser(){
    if (this.fname==""){
      const toast = await this.toastCtrl.create({
        message:'First name is required',
        duration: 2000
      });
      toast.present();
    }else if (this.lname==""){
      const toast = await this.toastCtrl.create({
        message:'Last name is required',
        duration: 2000
      });
      toast.present();
    }else if (this.username==""){
      const toast = await this.toastCtrl.create({
        message:'Username is required',
        duration: 2000
      });
      toast.present();
    }else if (this.password==""){
      const toast = await this.toastCtrl.create({
        message:'Password is required',
        duration: 2000
      });
      toast.present();
    }else{
    let data = {
      fname: this.fname,
      lname: this.lname,
      username: this.username,
      password: this.password,
    }
  
  this._apiService.addUser(data).subscribe(async (res:any)=> {
    console.log("SUCCESS ===", res);
    this.fname='';
    this.lname='';
    this.username='';
    this.password='';
    alert('SUCCESS');
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message:'Registration successful',
      duration: 2000
    });
    toast.present();
  },async (error:any)=> {
    alert('ERROR');
    console.log("ERROR ===", error);
    const toast = await this.toastCtrl.create({
      message:'Registration failed',
      duration: 2000
    });
    toast.present();
  })
}
}

}
