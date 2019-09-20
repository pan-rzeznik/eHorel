import { ShoppingCartService } from './shopping-cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFirestore, private cartService: ShoppingCartService) { }

  makeOrder(order: Order) {
    this.db.collection('orders').add({
     orderPerson: order.form,
     products: order.cart.items,
     message: order.message,
     total: order.totalMoney,
     date: new Date()
    });
    console.log(order);
    console.log(order.totalMoney);

    this.cartService.removeCart();
  }

  getAllOrders() {
    return this.db.collection('orders').snapshotChanges()
    .pipe(map(snaps => {
      return snaps.map( snap => {
        return {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }

  getTotalCountOfOrders() {
    return this.db.collection('orders').get();
  }

}
