import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() shoppingCart;
  id: string;
  selectedSize;
  product;
  error = false;
  constructor(private route: ActivatedRoute, private cart: ShoppingCartService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe( res => this.product = res.product);
  }

 addToCart() {
   if (!this.selectedSize) {
    this.error = true;
   } else {
    this.error = false;
    this.cart.addToCart(this.product, this.selectedSize);
   }
 }

 selectSize(s) {
  this.selectedSize = s;
 }


}
