import { Product } from './../../models/newProduct.models';
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories;
  product: Product;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.categories = this.db.categories;
    this.product = {
      type: '',
      name: '',
      description: '',
      price: 0,
      storage: 0,
      size: []
    };
  }
  createNew() {
    this.db.createNewProduct(this.product);
  }
}
