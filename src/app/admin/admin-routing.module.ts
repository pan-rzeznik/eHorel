import { LggedIntGuard } from './../shared/lgged-in.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [LggedIntGuard, AdminGuard],
    children: [
      {
        path: 'manage-products/add-new',
        component: NewProductComponent
      },
      {
        path: 'manage-products/:id',
        component: NewProductComponent
      },
      {
        path: 'manage-products',
        component: ManageProductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
