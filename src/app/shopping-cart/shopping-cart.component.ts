import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products$;
  constructor(private sc: ShoppingCartService) { }

 async ngOnInit() {
   this.products$ = await this.sc.getCart();
  }

  removeProduct(product) {
    console.log(product);
    this.sc.removeProductFromCart(product);
  }
  makeOrder() {
    
  }
}
