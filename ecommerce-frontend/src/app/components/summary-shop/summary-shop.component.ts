import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-summary-shop',
  templateUrl: './summary-shop.component.html',
  styleUrls: ['./summary-shop.component.css']
})
export class SummaryShopComponent implements OnInit {

  myShoppingCart: Product[] = [];

  count: number = 2;
  constructor(private storeService: StoreService,
    private productService: ProductService) {
    // this.myShoppingCart = [];
  }

  ngOnInit() {


    this.productService.getAll().subscribe(
      (products) => {
        this.myShoppingCart = products;
      }
    );

    // this.storeService.myCart$.subscribe((products) => {
    //   this.myShoppingCart = products;
    // });
    // this.myShoppingCart = this.storeService.getMyShoppingCart();
  }
}
