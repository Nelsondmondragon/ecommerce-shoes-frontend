import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }



  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotalPrice() {
    this.myShoppingCart.reduce((sum, product) => sum + product.price, 0);
  }

  getProducts() {
    return this.myShoppingCart;
  }

  getTotalProducts() {
    // console.log()
    return this.myShoppingCart.length;
  }
}
