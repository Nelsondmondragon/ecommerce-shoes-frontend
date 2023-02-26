import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product = {
    idProduct: '',
    price: 0,
    images: [],
    title: '',
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  // @Output() showProduct = new EventEmitter<string>();


  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }







}
