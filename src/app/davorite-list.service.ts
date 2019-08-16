import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteListService {
  private productList: string[] = [];
  constructor() { }

  addProduct(id: string) {
    this.productList.push(id);
    localStorage.setItem('list', JSON.stringify(this.productList));
  }
}
