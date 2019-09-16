import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NoOrderGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const items = JSON.parse(localStorage.getItem('order')).cart.items;
    if (items.length) {
      return true;
    }
    this.router.navigate(['/koszyk']);
    return false;
  }
}
