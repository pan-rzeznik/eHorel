import { ActivatedRoute, Router } from '@angular/router';
import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  url;
  title = 'eHorel';
  showHead = true;

  constructor(private router: Router) {
  }

  ngAfterContentChecked() {
    if(this.url = location.href.includes('admin')) {
      this.showHead = false;
    } else {
      this.showHead = true;
    }
  }
}
