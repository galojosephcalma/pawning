import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-add-transact',
  templateUrl: './add-transact.page.html',
  styleUrls: ['./add-transact.page.scss'],
})
export class AddTransactPage implements OnInit {
  /* variable */
  jewelry: any = [];
  appearance: any = [];
  test: any = [];
  karatage: any = [];

  account_number: any;
  item: any;
  item_appearance: any;
  weight: any;
  item_test: any;
  item_karatage: any;
  market_value: any;
  max_amount: any;
  amount: Number;

  due_date: Date;
  monthly_interest: number;

  constructor(private activatedRoute: ActivatedRoute, public _apiService: ApiService, private router: Router) {
    this.getJewelry();
    this.getAppearance();
    this.getTest();
    this.getKaratage();
  }

  ngOnInit() {
  }

  computation(){
    this.amount = this.market_value * this.weight * this.karatage
  }

  getJewelry(){
    var now = new Date();
    this.due_date = new Date(now.getFullYear(), now.getMonth()+1, 1);
    console.log(this.due_date)
    this._apiService.getJewelry().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.jewelry = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  getAppearance(){
    this._apiService.getAppearance().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.appearance = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  getTest(){
    this._apiService.getTest().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.test = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  getKaratage(){
    this._apiService.getKaratage().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.karatage = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
  add_transact(){
    let temp_item = this.item.id;
    let temp_item_appearance = this.item_appearance.id;
    let temp_item_test = this.item_test.id;

    /* Computation on max_amount, market_value and monthly interest */
    this.market_value = 3000 * this.item_karatage * this.weight;
    this.monthly_interest = this.market_value * 0.3;
    this.max_amount = this.market_value + this.monthly_interest;
    console.log(this.market_value, this.monthly_interest, this.max_amount);
    let json_data = {
      account_number: this.account_number,
      appearance: temp_item_appearance,
      jewelry: temp_item,
      weight: this.weight,
      test: temp_item_test,
      karatage: this.item_karatage,
      market_value: this.market_value,
      max_amount: this.max_amount,
      monthly_interest: this.monthly_interest
    }
    console.log(json_data)
    this._apiService.addTransact(json_data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.router.navigate(['/dashboard']);
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
