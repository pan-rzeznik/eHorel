import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderBilboardComponent } from './header-bilboard/header-bilboard.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop/shop.component';
import { ThanksForOrderComponent } from './thanks-for-order/thanks-for-order.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NewsComponent,
    CategoriesComponent,
    ContactComponent,
    HomeComponent,
    HeaderBilboardComponent,
    ProductFilterComponent,
    ShoppingCartComponent,
    OrderComponent,
    SummaryComponent,
    ProductGalleryComponent,
    SingleProductComponent,
    ProductCardComponent,
    ShopComponent,
    ThanksForOrderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CollapseModule.forRoot(),
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeShopModule { }
