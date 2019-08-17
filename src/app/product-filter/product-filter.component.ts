import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() sortASC = new EventEmitter();
  @Output() sortDESC = new EventEmitter();
  @Output() minPrice = new EventEmitter<number>();
  @Output() maxPrice = new EventEmitter<number>();
  curruentActive: number;
  constructor() { }

  ngOnInit() {
  }

  asc() {
    this.sortASC.emit('asc');
    this.curruentActive = 1;
  }
  desc() {
    this.sortDESC.emit('desc');
    this.curruentActive = 2;
  }
  min(price) {
    this.minPrice.emit(price);
  }
  max(price) {
    this.maxPrice.emit(price);
  }
}
 