import { ProductsResolver } from './models/products.resoler';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { environment } from 'src/environments/environment';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { DbService } from './services/db.service';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderBilboardComponent } from './header-bilboard/header-bilboard.component';
import { ValidationMeassageComponent } from './admin/new-product/validation-meassage/validation-meassage.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { PanelMenuComponent } from './admin/panel-menu/panel-menu.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductResolver } from './models/singleProduct.resolver';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    CategoriesComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ManageProductsComponent,
    OrdersComponent,
    LoggedOutComponent,
    NewProductComponent,
    ProductCardComponent,
    HeaderBilboardComponent,
    ValidationMeassageComponent,
    AdminPanelComponent,
    ProductsListComponent,
    PanelMenuComponent,
    ProductFilterComponent,
    SingleProductComponent,
    ShoppingCartComponent,
    OrderComponent,
    SummaryComponent,
    ProductGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService,
              DbService,
              ProductsResolver,
              SingleProductResolver,
              OrderService,
              ShoppingCartService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
