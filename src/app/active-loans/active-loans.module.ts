import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveLoansPageRoutingModule } from './active-loans-routing.module';

import { ActiveLoansPage } from './active-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveLoansPageRoutingModule
  ],
  declarations: [ActiveLoansPage]
})
export class ActiveLoansPageModule {}
