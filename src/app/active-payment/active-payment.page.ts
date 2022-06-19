import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-active-payment',
  templateUrl: './active-payment.page.html',
  styleUrls: ['./active-payment.page.scss'],
})
export class ActivePaymentPage implements OnInit {
  id: any;
  payments: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      })
  }

  ngOnInit() {
    this.getActivePayments();
  }
  getActivePayments(){
    console.log(this.id);
    this._apiService.getActivePayments(this.id).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.payments = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
