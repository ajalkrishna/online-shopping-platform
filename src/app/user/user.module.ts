import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    FooterComponent,
    UserDashboardComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
