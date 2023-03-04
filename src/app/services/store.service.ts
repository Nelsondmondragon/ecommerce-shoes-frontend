import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductsShop } from '../model/product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  private myShopingCartMap = new Map<string, ProductsShop>();



  constructor(private serviceProduct: ProductService) { }


  testProduct() {
    this.serviceProduct.getAll().subscribe(data => {
      data.forEach(element => {
        this.addProduct(element);
      });
    });
  }



  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.setSummaryShop(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotalPrice() {
    return this.myShoppingCart.reduce((sum, product) => sum + product.price, 0);
  }

  getProducts() {
    return this.myShoppingCart;
  }

  getTotalProducts() {
    return this.myShoppingCart.length;
  }


  setSummaryShop(product: Product) {
    let auxProduct = this.myShopingCartMap.get(product.id);
    if (auxProduct) {
      auxProduct.count++;
    } else {
      auxProduct = {
        ...product,
        count: 1
      }
      this.myShopingCartMap.set(product.id, auxProduct);
    }

  }

  getSummaryShop() {
    return this.myShopingCartMap;
  }
}
