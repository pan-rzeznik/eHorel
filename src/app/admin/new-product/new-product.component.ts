import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories;
  product;
  id;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    size: new FormArray([], Validators.required)
  });


  constructor(private db: DbService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.db.categories;

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.db.getProduct(this.id).subscribe( res => {this.product = res; console.log(res); });
    }
  }
  addSize(sizeV: HTMLInputElement) {
    this.size.push(new FormControl(sizeV.value));
  }
  createNew(product) {
    this.db.createNewProduct(product);
    this.router.navigate(['admin/manage-products']);
  }
  reset(form) {
    form.reset();
  }


  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get price() {
    return this.form.get('price');
  }
  get category() {
    return this.form.get('category');
  }
  get photo() {
    return this.form.get('photo');
  }
  get size() {
    return this.form.get('size') as FormArray;
  }
}
