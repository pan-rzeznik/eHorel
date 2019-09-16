import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Observable<any>;
  productList: [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.products.subscribe(res => {
      this.productList = res;
      this.productList.forEach( (p: any) => p.isVisible = true);
    });
  }

  edit(id) {
    this.router.navigate([`admin/manage-products/${id}`]);
  }

  filterProductByCategory(filteredCategoryName: string) {
    if ( filteredCategoryName === '0' ) {
      this.productList.forEach( (product: any) => product.isVisible = true);
      return;
    }

    this.productList.forEach( (product: any) => {
        if (product.category !== filteredCategoryName) {
          product.isVisible = false;
        } else {
          product.isVisible = true;
        }
      });
  }

  filterProductByPrice(selectedPriceFilter) {
    if ( selectedPriceFilter === '1') {
      this.productList.sort((a: any, b: any) => a.price > b.price ? 1 : -1);
    } else if (selectedPriceFilter === '2') {
      this.productList.sort((a: any, b: any) => a.price < b.price ? 1 : -1);
    }
  }

  filterProductByName(searchingWord: string) {
    this.productList.forEach( (product: any) => product.name.includes(searchingWord.toLocaleUpperCase()) ? 1 : product.isVisible = false);
  }

  reset() {
    this.productList.forEach( (product: any) => product.isVisible = true);
  }

}
