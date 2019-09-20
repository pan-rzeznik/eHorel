import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) { }



  loginUser(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logoutUser() {
    this.fireAuth.auth.signOut();
  }
  currentUser(): Observable<firebase.User> {
    return this.fireAuth.authState;
  }

  getUserFromDb(uid: string) {
    return this.db.collection('users').doc(uid).valueChanges();
  }
}
