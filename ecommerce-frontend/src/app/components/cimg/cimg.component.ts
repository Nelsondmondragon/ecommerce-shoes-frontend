import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cimg',
  templateUrl: './cimg.component.html',
  styleUrls: ['./cimg.component.css']
})
export class CimgComponent {

  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    // console.log('constructor', 'imgValue =>', this.img);
  }




  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    // console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
