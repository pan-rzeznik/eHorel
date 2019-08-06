import { Product } from './../models/newProduct.models';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  categories = ['sukienki', 'bluzki', 'spodnie', 'kombinezony', 'dodatki'];

  constructor(private firebase: AngularFirestore) { }

  getDressys() {
    return this.firebase.collection('sukienki').snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  createNewProduct(product: Product) {
    this.firebase.collection(product.category).add(product);
  }
  getProducts(category: string) {
    return this.firebase.collection(category).valueChanges();
  }

  getProduct(id) {
   return this.firebase.doc('/sukienki/' + id).valueChanges();
  }

}
