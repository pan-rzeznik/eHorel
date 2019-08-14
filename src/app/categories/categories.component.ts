import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DbService } from '../services/db.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories;
  category;
  products = [];
  filteredProduct = [];
  routeSubscription: Subscription;
  constructor(private route: ActivatedRoute, private db: DbService) { this.products = this.db.products; }
  

  ngOnInit() {
    
    this.routeSubscription = this.route.paramMap.subscribe( res => {
     this.category = res.get('name');
      if (this.category) {
        this.filteredProduct = this.products.filter( c => c.category === this.category );
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
