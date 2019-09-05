import { DbService } from '../../shared/services/db.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  items$;
  constructor(private db: DbService) { }

  ngOnInit() {
   this.items$ = this.db.getNews();
    }
  }



