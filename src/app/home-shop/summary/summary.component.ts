import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  order: Order;
  constructor() { }

  ngOnInit() {
    this.order = JSON.parse(localStorage.getItem('order'));
  }

}
