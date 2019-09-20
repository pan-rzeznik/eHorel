import { AuthService } from './../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  isAdmin: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private db: AngularFirestore, private router: Router) {}

  canActivate(): Observable<boolean> {
      return this.auth.currentUser().pipe(
        switchMap( u => this.auth.getUserFromDb(u.uid)),
        map((appUser: User) => {
          if (appUser.isAdmin) {
            return true;
          } else {
            this.router.navigate(['/news']);
            return false;
          }
        })
      );
  }

}
