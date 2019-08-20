import { ProductsResolver } from './models/products.resoler';
import { FavoriteListService } from './davorite-list.service';
import { AuthService } from './services/auth.service';
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
import { IsFavoriteComponent } from './is-favorite/is-favorite.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductResolver } from './models/singleProduct.resolver';

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
    IsFavoriteComponent,
    ProductFilterComponent,
    SingleProductComponent
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
    FontAwesomeModule
  ],
  providers: [AuthService,
              DbService,
              FavoriteListService,
              ProductsResolver,
              SingleProductResolver
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
