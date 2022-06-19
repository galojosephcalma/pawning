import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {
  id: any;
  transaction: any = [];
  payments: any = [];

  transact_id: any;
  item: any;
  firstname: any;
  lastname: any;
  maximum_amount: any;
  due_date: any;
  monthly_interest: any;
  market_value: any;
  status: any;

  payment_date: Date;
  paid_interest: number;
  paid_jewelry_amount: number;

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
    this.singleTransaction();
    this.getPayments();
  }
  MarkAsPaid(){
    let json_data = {
      id:this.id
    }
    console.log(json_data);
    this._apiService.updateTransactionStatus(this.id, json_data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  singleTransaction(){
    this._apiService.getSingleTransactions(this.id).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.transaction = res[0];
      this.transact_id = res[0].id;
      this.item = res[0].Jewelry;
      this.firstname = res[0].Firstname;
      this.lastname = res[0].Lastname;
      this.maximum_amount = res[0].Maximum_amount;
      this.monthly_interest = res[0].Monthly_interest;
      this.market_value = res[0].Market_value;
      this.due_date = res[0].Due_date;
      this.status = res[0].status;

      this.paid_interest = res[0].Monthly_interest;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  getPayments(){
    console.log(this.id);
    this._apiService.getPayments(this.id).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.payments = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  addPayment(){
    let json_data = {
      id: this.id,
      due_date: this.due_date,
      date: this.payment_date,
      interest: this.paid_interest,
      jewelry_amount: this.paid_jewelry_amount
    }
    console.log(json_data);
    this._apiService.addPayment(json_data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
    
    if (this.paid_jewelry_amount > 0) {
      /* update transaction data */
      this.market_value = this.market_value - this.paid_jewelry_amount
      this.monthly_interest = this.market_value * 0.3
      this.maximum_amount = this.market_value + this.monthly_interest
      this.UpdateTransaction();
      this.getPayments();
    }
    this.getPayments();
  }
  UpdateTransaction(){
    let json_data = {
      due_date: this.due_date,
      market_value: this.market_value,
      monthly_interest: this.monthly_interest,
      maximum_amount: this.maximum_amount
    }
    console.log(json_data);
    this._apiService.updateTransaction(this.id, json_data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.payments = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
