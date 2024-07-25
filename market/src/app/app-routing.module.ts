import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductPosComponent } from './product-pos/product-pos.component';


const routes: Routes = [

  { path: 'sales', component: SalesComponent },
  { path: 'productList/:id', component: ProductlistComponent },
  { path: 'productPos', component: ProductPosComponent },
  { path: '', redirectTo: '**', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
