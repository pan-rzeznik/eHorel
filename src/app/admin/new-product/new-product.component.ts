import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from './../../validators/customValidator';
import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { Product } from 'src/app/models/newProduct';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  id: string;
  categories;
  form;
  product = {};
  constructor(private db: DbService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.db.getProduct(this.id).pipe(first()).subscribe(res => {
        this.form.get('name').setValue(res.name);
        this.form.get('category').setValue(res.category);
        this.form.get('price').setValue(res.price);
        this.form.get('storage').setValue(res.storage);
        this.form.get('isNew').setValue(res.isNew);
        this.form.get('validSize').setValue(' ');
        this.form.get('promotion').setValue(res.promotion);
        this.form.get('description').setValue(res.description);
        res.size.forEach(s => {
        this.form.get('size').push(new FormControl(s, CustomValidators.cannotLessThanZero));
       });
        res.photos.forEach(p => {
        this.form.get('photos').push(new FormControl(p, CustomValidators.cannotLessThanZero));
       });
      });
    }
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
    this.form.get('validSize').setValue(' ');
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
    this.router.navigate(['admin/manage-products']);
  }
  updateProduct() {
    this.db.updateProduct(this.id, this.form.value);
    this.router.navigate(['admin/manage-products']);
  }
}
