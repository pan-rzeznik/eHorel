import { FavoriteListService } from './../davorite-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-is-favorite',
  templateUrl: './is-favorite.component.html',
  styleUrls: ['./is-favorite.component.scss']
})
export class IsFavoriteComponent implements OnInit {
  @Input() product;
  heart = faHeart;
  isFavorite = false;
  constructor(private storage: FavoriteListService) { }

  ngOnInit() {
  }

  addToFavoriteList(product) {
    this.storage.addProduct(product);
    this.isFavorite = !this.isFavorite;
  }

}
