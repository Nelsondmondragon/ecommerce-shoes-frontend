import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  token: string = '';

  @Input() products: Product[] = [];
  showProductDetail = false;
  productChoosen: Product = {
    idProduct: '',
    price: 0,
    images: [],
    title: '',
    description: ''
  };


  productsSli: Product[] = [];

  @Output() fiveProducts = new EventEmitter<Product[]>();



  constructor(
    private productService: ProductService, private tokenService: TokenService,
    private storeService: StoreService
  ) {

  }


  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    this.productService.getAll().subscribe(data => {
      // console.log(data);
      this.products = data;
      for (let i = 0; i < 5; i++) {
        this.productsSli.push(data[i]);
      }

      // console.log("kkkk");
      // console.log(this.productsSli);
      this.onFiveProducts();
    });
  }

  onFiveProducts() {
    this.fiveProducts.emit(this.products);
  }

  onAddProduct(product: Product) {
    console.log("aaa");
    this.storeService.addProduct(product);
  }


}
