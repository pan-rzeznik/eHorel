import { ShoppingCartService } from './../shopping-cart.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCard } from '../models/shoppingCard';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser;
  isCollapsed = true;
  items$: Observable<ShoppingCard>;
  constructor(private auth: AuthService,
              private router: Router,
              private shoppingCart: ShoppingCartService) { }

  async ngOnInit() {
    this.auth.currentUser().subscribe(res => this.currentUser = res);
    this.items$ = await this.shoppingCart.getCart();
    }
}

