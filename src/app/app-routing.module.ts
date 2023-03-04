import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { LadingpageComponent } from './components/ladingpage/ladingpage.component';
import { SummaryShopComponent } from './components/summary-shop/summary-shop.component';
import { AddAddresComponent } from './components/add-addres/add-addres.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: '',
    component: LadingpageComponent
  }
  ,
  {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }, {
    path: 'summary',
    component: SummaryShopComponent
  }, {
    path: 'address',
    component: AddAddresComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
