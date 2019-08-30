import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ShoppingCard } from './models/shoppingCard';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private firebase: AngularFirestore) { }

  private create() {
    return this.firebase.collection('carts').add({
      create: new Date()
    });
  }

  async getCart() {
    const cartId = await this.getOrCreate();
    const cart = this.firebase.doc(`carts/${cartId}`).collection('items').valueChanges().pipe(
      map( c => new ShoppingCard(c))
    );
    return cart;
  }




  private async getOrCreate() {

    const cartId = localStorage.getItem('shoppingCart');

    if (!cartId) {
     const res = await this.create();
     localStorage.setItem('shoppingCart', res.id);
     return res.id;

    } else {
      return cartId;
    }
  }


  async removeProductFromCart(product) {
    const cartId = await this.getOrCreate();
    this.firebase.collection('carts/' + cartId + '/items').doc(product.product.id).delete();
  }

  async removeCart() {
    const cartId = await this.getOrCreate();
    const path = `carts/ + ${cartId} + /items`;
    localStorage.removeItem('shoppingCart');
  }

  async addToCart(product, size) {
    const cartId = await this.getOrCreate();
    const item$ = this.firebase.collection('carts/' + cartId + '/items').doc(product.id);
    item$.get().pipe(take(1)).subscribe( i => {
      if (!i.exists) {
        item$.set({product, amount: {quantity: 1, size}});
      // tslint:disable-next-line:align
      } if (i.exists && i.get('amount').size === size) {
        item$.update({product, amount: {quantity: +i.get('amount').quantity + 1, size}});
      // tslint:disable-next-line:align
      }
    });
  }
  modifyQuantity(productId, change: number) {
    const cartId = localStorage.getItem('shoppingCart');
    const item$ = this.firebase.collection('carts/' + cartId + '/items').doc(productId);
    item$.get().pipe(take(1)).subscribe( i => {
      if (i.get('amount').quantity === 1 && change === -1) {
        this.firebase.collection('carts/' + cartId + '/items').doc(productId).delete();
        return;
        }
      item$.update({ 'amount.quantity': +i.get('amount').quantity + change});
    });
  }
}
