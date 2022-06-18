import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  transaction: any = [];
  constructor(public _apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getTransactions();
  }
  getTransactions(){
    this._apiService.getAllTransactions().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.transaction = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
