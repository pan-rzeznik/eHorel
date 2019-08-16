import { ActivatedRoute, Router } from '@angular/router';
import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  url;
  title = 'eHorel';
  showHead = true;

  constructor(private router: Router, private db: DbService) { this.db.getAllToMemory();
  }

  ngAfterContentChecked() {
    if(location.href.includes('admin')) {
      this.showHead = false;
    } else {
      this.showHead = true;
    }
  }

}
