import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-active-loans',
  templateUrl: './active-loans.page.html',
  styleUrls: ['./active-loans.page.scss'],
})
export class ActiveLoansPage implements OnInit {
  id: any;
  karatage: any = [];
  jewelry: any = [];
  transaction: any = [];
  item: string;
  weight: number;
  item_karatage: number;
  result: any;
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
    this.getActiveLoans();
  }
  getActiveLoans(){
    console.log(this.id)
    this._apiService.getActiveLoans(this.id).subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.transaction = res;
    },(error: any)=>{
      console.log("ERROR === ", error);
    });
  }
}
