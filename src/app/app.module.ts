import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavouritrComponent } from './favouritr/favouritr.component';
import { SummaryPipe } from './summary.pipe';
import { PannelComponent } from './pannel/pannel.component';
import { InputFormateDirective } from './input-formate.directive';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavouritrComponent,
    SummaryPipe,
    PannelComponent,
    InputFormateDirective,
    LoginComponent,
    NavBarComponent,
    ProductComponent,
    MyOrderComponent,
    AdminProductComponent,
    AdminOrdersComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   CustomFormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
