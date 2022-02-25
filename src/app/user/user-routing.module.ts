import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,children:[{path:'user-dashboard',component:UserDashboardComponent},
{path:'order',component:OrderComponent},
{path:'cart',component:CartComponent}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
