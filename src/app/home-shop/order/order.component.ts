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
              private router: Router) { }

  async ngOnInit() {
    this.form = this.fb.group({
      contact: this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        postCode: ['', [
          Validators.required,
          Validators.min(10000),
          Validators.max(99999)]
          ],
        phone: ['', [
          Validators.required,
          Validators.min(10000000000),
          Validators.max(999999999999)
        ]
        ],
        mail: ['', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]]
      }),
      paymants: this.fb.group ({
        paymentType : ['', Validators.required],
        delivery : ['', Validators.required]
      })
    });

    console.log(this.form);
    this.cart$ = await this.cart.getCart();
    this.cart$.subscribe( res => this.items = res);

    if (localStorage.getItem('order')) { this.fillCustomerForm(); }
  }
  makeOrder() {
    localStorage.setItem('order', JSON.stringify(new Order(this.items, this.form.value)));
  }
  fillCustomerForm() {
    const customerData = JSON.parse(localStorage.getItem('order')).form;
    this.form.get(['contact', 'name']).setValue(customerData.contact.name);
    this.form.get(['contact', 'surname']).setValue(customerData.contact.surname);
    this.form.get(['contact', 'city']).setValue(customerData.contact.city);
    this.form.get(['contact', 'street']).setValue(customerData.contact.street);
    this.form.get(['contact', 'postCode']).setValue(customerData.contact.postCode);
    this.form.get(['contact', 'phone']).setValue(customerData.contact.phone);
    this.form.get(['contact', 'mail']).setValue(customerData.contact.mail);
    this.form.get(['paymants', 'paymentType']).setValue(customerData.paymants.paymentType);
    setTimeout(() => {
      this.form.get(['paymants', 'delivery']).setValue(customerData.paymants.delivery);
    }, 10);
  }

}
