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
  client_name: any;
  address: any;
  phone: any;
  item: any;
  item_appearance: any;
  weight: any;
  net_weight: any;
  quantity: any;
  value_assesees: any;
  karatage: any;
  market_value: any;
  max_amount: any;
  item_test: any;

  constructor(private activatedRoute: ActivatedRoute, public _apiService: ApiService, private router: Router) {
    this.getJewelry();
    this.getAppearance();
    this.getTest();
  }

  ngOnInit() {
  }
  getJewelry(){
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
  add_transact(){
    let temp_item = this.item.id;
    let temp_item_appearance = this.item_appearance.id;
    let temp_item_test = this.item_test.id;
    let json_data = {
      client_name: this.client_name,
      address: this.address,
      phone: this.phone,
      appearance: temp_item_appearance,
      jewelry: temp_item,
      weight: this.weight,
      net_weight: this.net_weight,
      quantity: this.quantity,
      value_assesees: this.value_assesees,
      karatage: this.karatage,
      market_value: this.market_value,
      max_amount: this.max_amount,
      test: temp_item_test
    }
    console.log(json_data)
    this._apiService.addTransact(json_data).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
