import { DbService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  products;
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.db.getDressys().subscribe( res => this.products = res);
  }
}
