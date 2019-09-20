import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DbService } from './services/db.service';
import { ProductsResolver } from './models/products.resoler';
import { SingleProductResolver } from './models/singleProduct.resolver';
import { OrderService } from './services/order.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ValidationMeassageComponent } from './validation-meassage/validation-meassage.component';
import { ConfirmValueDirective } from './directive/confirm-value.directive';
import { MenuDirective } from './menu.directive';



@NgModule({
  declarations: [
    ValidationMeassageComponent,
    ConfirmValueDirective,
    MenuDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    DbService,
    ProductsResolver,
    SingleProductResolver,
    OrderService,
    ShoppingCartService
  ],
  exports: [
    ValidationMeassageComponent,
    ReactiveFormsModule,
    FormsModule,
    ConfirmValueDirective,
    MenuDirective,
  ]
})
export class SharedModule { }
