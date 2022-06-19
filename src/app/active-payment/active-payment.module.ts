import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivePaymentPageRoutingModule } from './active-payment-routing.module';

import { ActivePaymentPage } from './active-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivePaymentPageRoutingModule
  ],
  declarations: [ActivePaymentPage]
})
export class ActivePaymentPageModule {}
