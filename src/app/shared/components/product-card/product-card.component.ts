import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.getDominantColor(this._data.img)
  }
  @Input({required: true}) _data!: Product

  get data() {
    return this._data
  }
  get type() {
    return this._data.types.join(', ')
  }
  get price() {
    return `$ ${this._data.price}`
  }
  get discount() {
    return this._data.discount ? `$ ${this._data.applyDiscount()}` : ''
  }

  getDominantColor(image: string) {
    const imageObject = new Image()
    imageObject.src = image
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    // preview = document.getElementById("preview"),
    const ctx = canvas!.getContext("2d");
    //draw the image to one pixel and let the browser find the dominant color
    ctx!.drawImage(imageObject, 0, 0, 1, 1);
  
    //get pixel color
    const i = ctx!.getImageData(0, 0, 1, 1).data;
  
    console.log(`rgba(${i[0]},${i[1]},${i[2]},${i[3]})`);
  
    console.log("#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1));
  }
}
