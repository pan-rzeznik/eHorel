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
  searchBar: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  edit(id) {
    this.router.navigate([`admin/manage-products/${id}`]);
    console.log(id);
  }

}
