import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivePaymentPage } from './active-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ActivePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivePaymentPageRoutingModule {}
