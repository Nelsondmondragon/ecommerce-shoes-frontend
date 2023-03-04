import { Component, OnInit } from '@angular/core';
import { Product, ProductsShop } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-summary-shop',
  templateUrl: './summary-shop.component.html',
  styleUrls: ['./summary-shop.component.css']
})
export class SummaryShopComponent implements OnInit {

  myShoppingCart = new Map<string, ProductsShop>();
  totalCart: number = 0;
  constructor(private storeService: StoreService,
    private productService: ProductService) {
    // this.myShoppingCart = [];
  }

  ngOnInit() {


    // this.storeService.testProduct();


    this.storeService.myCart$.subscribe(() => {
      this.myShoppingCart = this.storeService.getSummaryShop();
      this.totalCart = this.storeService.getTotalPrice();
    });
  }
}
