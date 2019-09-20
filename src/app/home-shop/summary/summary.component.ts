import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  order: Order;
  message: string = '';
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    const cart = JSON.parse(localStorage.getItem('order')).cart;
    const person = JSON.parse(localStorage.getItem('order')).form;
    this.order = new Order(cart, person);
  }

  finalizeOrder() {
    this.order.message = this.message;
    this.orderService.makeOrder(this.order);
  }
}
