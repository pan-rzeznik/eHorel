import { ActivatedRoute, Router } from '@angular/router';
import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked, OnInit{
  url;
  title = 'eHorel';
  showHead = true;

  constructor(private router: Router, private db: DbService) {
  }

  ngAfterContentChecked() {
    if(this.url = location.href.includes('admin')) {
      this.showHead = false;
    } else {
      this.showHead = true;
    }
  }

  ngOnInit() {
    this.db.getAllToMemory();
  }
}
