import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTransactPage } from './add-transact.page';

const routes: Routes = [
  {
    path: '',
    component: AddTransactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTransactPageRoutingModule {}
