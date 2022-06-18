import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  karatage: any = [];
  jewelry: any = [];
  transaction: any = [];
  item: string;
  weight: number;
  item_karatage: number;
  result: any;

  constructor(public _apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getKaratage();
    this.getJewelry();
    this.getTransactions();
  }
  getJewelry(){
    this._apiService.getJewelry().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.jewelry = res;
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
  estimate(){
    this.result = "PHP " + 3000 * this.item_karatage * this.weight;
    console.log(this.result)
  }
  getTransactions(){
    this._apiService.getTransactions().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.transaction = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
