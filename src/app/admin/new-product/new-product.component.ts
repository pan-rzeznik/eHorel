import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.categories = this.db.categories;
  }
  createNew(product) {
    this.db.createNewProduct(product);
  }
  reset(form) {
    form.reset();
  }
}
