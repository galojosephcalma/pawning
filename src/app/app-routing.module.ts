import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-transact',
    loadChildren: () => import('./manage_transaction/add-transact/add-transact.module').then( m => m.AddTransactPageModule)
  },
  {
    path: 'modify',
    loadChildren: () => import('./manage_transaction/modify/modify.module').then( m => m.ModifyPageModule)
  },  {
    path: 'list',
    loadChildren: () => import('./manage_transaction/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'active-loans',
    loadChildren: () => import('./active-loans/active-loans.module').then( m => m.ActiveLoansPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
