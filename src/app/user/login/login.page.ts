import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  username: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    public _apiService: ApiService,
    public toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  formRegister(){
      this.router.navigate(['/register']);
  }
  login(){
    console.log(this.username);
    this._apiService.login(this.username).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      let holder = res[0];
      if(res.length == 0){
        alert('Email or password is incorrect');
      }else{
        this.username = holder.username;
        /* checks if password match */
        if(this.password != holder.password){
          alert('Email or password is incorrect');
        }else{
          if(holder.level == 1){
            this.router.navigate(['/dashboard']);
          }else{
            this.router.navigate(['/active-loans', holder.user_id])
          }
          
        }
      }
      
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }


  //Sample of admin to redirect to maintenance
  async processLogin(){
    let data = {
      username: this.username,
      password: this.password,
    }
    if (this.username == 'admin' && this.password =='admin'){
      const toast = await this.toastCtrl.create({
        message:'Login successful',
        duration: 2000
      });
      this.router.navigate(['/home']);
      this.username='';
      this.password='';
    }

  }
}
