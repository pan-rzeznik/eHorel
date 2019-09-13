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

  createUserWithEmail(email: string, password: string) {
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(cred => {
      this.db.collection('users').doc(cred.user.uid).set({
          email,
          password,
          isAdmin: false
        });
    });
  }
  createUserWithGoogle() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( cred => {
      this.db.collection('users').doc(cred.user.uid).set({
        email: cred.user.email,
        isAdmin: false
      });
      this.router.navigate(['']);
    }
    );
  }

  loginWithGoogle() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( () => {
        this.router.navigate(['']);
      }
    );
  }
  loginUser(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then();
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
