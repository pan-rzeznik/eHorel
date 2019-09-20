import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
      return this.auth.currentUser().pipe(
        map( cur => {
          if (cur) {
            this.router.navigate(['']);
            return false;
          } else {
            return true;
          }
        })
      );
  }

}
