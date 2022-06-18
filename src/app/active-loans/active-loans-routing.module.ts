import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveLoansPage } from './active-loans.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveLoansPageRoutingModule {}
