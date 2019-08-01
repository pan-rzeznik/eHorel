import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firebase: AngularFirestore) { }

  getDressys() {
    return this.firebase.collection('sukienki').valueChanges();
  }
}
