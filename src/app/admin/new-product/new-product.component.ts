import { Product } from './../../models/newProduct';
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories;
  form;

  constructor(private db: DbService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.categories = this.db.categories;

    this.form = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      category: [''],
      storage: [''],
      isNew: [false],
      promotion: [false],
      size: this.fb.array([]),
      photos: this.fb.array([])
    });

    console.log(this.form);
  }

  newSize(size: HTMLInputElement) {
    this.form.get('size').push(new FormControl(size.value));
  }
  removeSize(index: number) {
    this.form.get('size').removeAt(index);
  }
  newImgLink(link: HTMLInputElement) {
    this.form.get('photos').push(new FormControl(link.value));
  }
  removePhoto(index: number) {
    this.form.get('photos').removeAt(index);
  }

  createProduct() {
    this.db.createNewProduct(this.form);
  }

}
