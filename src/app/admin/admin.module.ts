import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { OrdersComponent } from './orders/orders.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    ManageProductsComponent,
    OrdersComponent,
    NewProductComponent,
    ProductsListComponent,
    PanelMenuComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    AdminPanelComponent,
    ManageProductsComponent,
    OrdersComponent,
    NewProductComponent,
    ProductsListComponent,
    PanelMenuComponent
  ]
})
export class AdminModule { }
