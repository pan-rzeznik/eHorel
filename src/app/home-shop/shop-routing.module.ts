import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductResolver } from '../shared/models/singleProduct.resolver';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsResolver } from '../shared/models/products.resoler';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { NoOrderGuard } from '../shared/no-order.guard';
import { ThanksForOrderComponent } from './thanks-for-order/thanks-for-order.component';

const routes: Routes = [
  {
  path: '',
    component: ShopComponent,
    children: [
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
        path: 'koszyk',
        component: ShoppingCartComponent
      },
      {
        path: 'zamowienie',
        component: OrderComponent,
      },
      {
        path: 'podsumowanie',
        component: SummaryComponent,
        canActivate: [NoOrderGuard]
      },
      {
        path: 'end',
        component: ThanksForOrderComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
