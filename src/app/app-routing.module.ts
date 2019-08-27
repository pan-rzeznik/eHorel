import { ProductsResolver } from './models/products.resoler';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductResolver } from './models/singleProduct.resolver';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'categories/:name/:id',
    component: SingleProductComponent,
    resolve: {
      product: SingleProductResolver
    }
  },
  {
    path: 'categories/:name',
    component: CategoriesComponent,
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
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
  },
  {
    path: 'koszyk',
    component: ShoppingCartComponent
  },
  {
    path: 'logged-out',
    component: LoggedOutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
