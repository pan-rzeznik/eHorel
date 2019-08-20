import { ActivatedRoute, Router } from '@angular/router';
import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  title = 'eHorel';
  showHead = true;

  constructor(private router: Router) {
  }

  ngAfterContentChecked() {
    if (location.href.includes('admin')) {
      this.showHead = false;
    } else {
      this.showHead = true;
    }
  }

}
