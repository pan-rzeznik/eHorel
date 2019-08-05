import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories;
  category;
  routeSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe( res => {
     this.category = res.get('name');
    });
    
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
