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
  constructor(private route: ActivatedRoute, private cart: ShoppingCartService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe( res => this.product = res.product);
  }

 addToCart() {
   this.cart.addToCart(this.product, this.selectedSize);
 }

 test(s) {
  this.selectedSize = s;
  console.log(this.selectedSize);
 }


}
