import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransactPageRoutingModule } from './add-transact-routing.module';

import { AddTransactPage } from './add-transact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransactPageRoutingModule
  ],
  declarations: [AddTransactPage]
})
export class AddTransactPageModule {}
