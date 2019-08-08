import { CustomValidators } from './../../validators/customValidator';
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { Product } from 'src/app/models/newProduct';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories;
  form;
  product: Product;
  constructor(private db: DbService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.categories = this.db.categories;

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [
         Validators.required,
         CustomValidators.cannotLessThanZero
      ]],
      category: ['', Validators.required],
      storage: ['', [
        Validators.required,
        CustomValidators.cannotLessThanZero
     ]],
      isNew: [false],
      promotion: [false],
      validSize: ['', [
        Validators.required,
        CustomValidators.cannotLessThanZero
     ]],
      size: this.fb.array([]),
      photos: this.fb.array([])
    });
  }

  newSize(size: HTMLInputElement) {
    this.form.get('size').push(new FormControl(size.value, CustomValidators.cannotLessThanZero));
    size.value = '';
    this.form.get('validSize').setValue(" ");
    this.form.get('validSize').touched = false;
  }
  resetSize() {
    this.form.get('validSize').setValue('');
    this.form.get('validSize').touched = false;
  }
  removeSize(index: number) {
    this.form.get('size').removeAt(index);
  }
  newImgLink(link: HTMLInputElement) {
    this.form.get('photos').push(new FormControl(link.value));
    link.value = '';
  }
  removePhoto(index: number) {
    this.form.get('photos').removeAt(index);
  }

  createProduct() {
    this.db.createNewProduct(this.form.value);
  }

}
