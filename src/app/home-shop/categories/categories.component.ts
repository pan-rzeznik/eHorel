import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category;
  products = [];
  filteredProduct = [];
  constructor(private route: ActivatedRoute, private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => this.category = res.get('name'));
    this.route.data.subscribe( data => {
      this.filteredProduct = data.products;
      this.products = data.products;
    });
  }

  sortASC() {
    this.filteredProduct.sort((a, b) => a.price - b.price);
  }

  sortDESC() {
    this.filteredProduct.sort((a, b) => b.price - a.price);
  }

}
