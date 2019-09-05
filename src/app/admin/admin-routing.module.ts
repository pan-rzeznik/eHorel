import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
