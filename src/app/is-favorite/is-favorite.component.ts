import { FavoriteListService } from './../davorite-list.service';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-is-favorite',
  templateUrl: './is-favorite.component.html',
  styleUrls: ['./is-favorite.component.scss']
})
export class IsFavoriteComponent implements OnInit {
  @Input() product;
  @Input() state;
  heart = faHeart;
  constructor(private storage: FavoriteListService) { }

  ngOnInit() {
  }

  addToFavoriteList(product) {
    this.storage.addProduct(product);
    this.state = !this.state;
  }

}
