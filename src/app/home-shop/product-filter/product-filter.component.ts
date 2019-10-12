import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Output() sortASC = new EventEmitter();
  @Output() sortDESC = new EventEmitter();
  @Output() minPrice = new EventEmitter<number>();
  @Output() maxPrice = new EventEmitter<number>();

  curruentActive: number;
  selectedField;

  onChangeFilter() {
    if (this.selectedField === '1') {
      this.asc();
    } else {
      this.desc();
    }
  }
  asc() {
    this.sortASC.emit('asc');
  }
  desc() {
    this.sortDESC.emit('desc');
  }
}
