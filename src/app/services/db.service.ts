import { Product } from './../models/newProduct.models';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  categories = ['sukienki', 'bluzki', 'spodnie', 'kombinezony', 'dodatki'];

  constructor(private firebase: AngularFirestore) { }

  getDressys() {
    return this.firebase.collection('sukienki').valueChanges();
  }
  createNewProduct(product: Product) {
    this.firebase.collection(product.type).add(product);
  }
  getProducts(category: string) {
    return this.firebase.collection(category).valueChanges();
  }
}
