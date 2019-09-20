import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';
import { OrderService } from 'src/app/shared/services/order.service';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  dataObject = {
    ordersCount: 0,
    productsCount: 0,
    isNewProducts: 0,
    totalValueOfProducts: 0
  };

  constructor(private db: DbService, private order: OrderService) { }

  ngOnInit() {
    this.order.getTotalCountOfOrders().subscribe( res => this.dataObject.ordersCount = res.size);
    this.db.getTotalCountOfProducts().subscribe( res => this.dataObject.productsCount = res.size);
    this.db.getTotalCountOfNewProducts().subscribe( res => this.dataObject.isNewProducts = res.size);
    this.db.getAll().subscribe( res => {
      let total = 0;

      res.forEach((p: any) => {
        total += p.storage * p.price;
      });
      this.dataObject.totalValueOfProducts = +total.toFixed(0);
    });
  }
}
