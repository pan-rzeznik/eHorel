import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

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
  clearCard(products) {
    products.items.forEach(element => {
      this.removeProduct(element);
    });
  }
  removeProduct(product) {
    this.sc.removeProductFromCart(product);
  }

  addOne(p) {
    this.sc.modifyQuantity(p.product.id, 1);
  }
  removeOne(p) {
    this.sc.modifyQuantity(p.product.id, -1);
  }
}
