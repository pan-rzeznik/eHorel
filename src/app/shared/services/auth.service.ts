import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebase: AngularFireAuth) { }

  createUser(email: string, password: string) {
    this.firebase.auth.createUserWithEmailAndPassword(email, password).then( cred => {
      console.log(cred);
    });
  }
  loginUser(email: string, password: string){
    this.firebase.auth.signInWithEmailAndPassword(email, password).then( cred => {
      console.log(cred);
    });
  }
  logoutUser() {
    this.firebase.auth.signOut();
  }
  currentUser() {
    return this.firebase.authState;
  }
}
