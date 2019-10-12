import { Component, OnInit, Input } from '@angular/core';
import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {
  @Input() images;
  mainImage;

  ngOnInit() {
    this.mainImage = this.images[0];
  }

  changeMainPhoto(photoUrl) {
    this.mainImage = photoUrl;
  }

}
