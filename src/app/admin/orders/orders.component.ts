import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders;
  activeOrder;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().pipe(first()).subscribe(res => {
      this.orders = res;
      this.activeOrder = this.orders[0];
    });
  }

  test(index) {
    this.activeOrder = this.orders[index];
  }

}
