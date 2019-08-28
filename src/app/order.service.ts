import { ShoppingCartService } from './shopping-cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFirestore, private cartService: ShoppingCartService) { }

  makeOrder(order: Order) {
    this.db.collection('orders').add({
     orderPerson: order.form.value,
     products: order.cart.items,
     totalPrice: order.totalMoney
    });
    this.cartService.removeCart();
  }
}
