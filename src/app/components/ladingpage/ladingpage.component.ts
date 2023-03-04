import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LadingpageComponent {

  productS: Product[] = [];

  onFiveProducts(products: Product[]) {
    // console.log("ddd");
    this.productS = products;
    // console.log(products);
  }
}
