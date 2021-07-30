import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ProductComponent } from './product/product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const routes: Routes = [

  {path: 'products' , component:ProductComponent},
  {path: 'orders' , component:MyOrderComponent},
  {path: 'admin/order' , component:AdminOrdersComponent},
  {path: 'admin/products' , component:AdminProductComponent},
  {path: 'shopingCart' , component:ShopingCartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
