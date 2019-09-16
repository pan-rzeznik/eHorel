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
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = JSON.parse(localStorage.getItem('order'));
  }

  tets() {
    this.orderService.makeOrder(this.order);
  }
}
