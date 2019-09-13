import { Router } from '@angular/router';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';
import { Order } from '../../shared/models/order';
import { Observable } from 'rxjs';
import { ShoppingCard } from '../../shared/models/shoppingCard';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  form;
  cart$: Observable<ShoppingCard>;
  items: ShoppingCard;

  constructor(private fb: FormBuilder,
              private cart: ShoppingCartService,
              private order: OrderService,
              private router: Router) { }

  async ngOnInit() {
    this.form = this.fb.group({
      contact: this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        postCode: ['', Validators.required],
        phone: ['', Validators.required],
        mail: ['', Validators.required],
      }),
      paymants: this.fb.group ({
        paymentType : ['', Validators.required],
        delivery : ['', Validators.required]
      })
    });
    this.cart$ = await this.cart.getCart();
    this.cart$.subscribe( res => this.items = res);
}
  makeOrder() {
    localStorage.setItem('order', JSON.stringify(new Order(this.items, this.form.value)));
  }

}
