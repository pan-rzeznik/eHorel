import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  edit(id) {
    this.router.navigate([`admin/manage-products/${id}`]);
    console.log(id);
  }
}
