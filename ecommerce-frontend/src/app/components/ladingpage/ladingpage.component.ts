import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.css']
})
export class LadingpageComponent {

  productS: Product[] = [];

  onFiveProducts(products: Product[]) {
    // console.log("ddd");
    this.productS = products;
    // console.log(products);
  }
}
