import { CurrencyPipe, NgStyle } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle,
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements AfterViewChecked, AfterViewInit {
  @Input({required: true}) _data!: Product
  //private backgroundColor: string = 'rgba(0, 0, 0, 0.022)'
  private backgroundColor: string = 'transparent'

  ngAfterViewChecked(): void {
    //this.getDominantColor(this._data.img)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getDominantColor(this._data.img)
    }, 10)
  }

  get bgColor() {
    return this.backgroundColor
  }

  get canvaId() {
    return `product-card-canva-${this._data.id}`
  }
  get data() {
    return this._data
  }
  get type() {
    return this._data.types.join(', ')
  }
  get price() {
    return this._data.price
  }
  get discount() {
    return this._data.discount ? this._data.applyDiscount() : ''
  }
  get discountPercentage() {
    return this._data.discount ? `${this._data.discount.value}%` : '0%'
  }

  getDominantColor(image: string) {
    const imageObject = new Image()
    imageObject.src = image
    const canvas = document.getElementById(this.canvaId) as HTMLCanvasElement
    // preview = document.getElementById("preview"),
    const ctx = canvas!.getContext("2d", { willReadFrequently: true });
    //draw the image to one pixel and let the browser find the dominant color
    ctx!.drawImage(imageObject, 0, 0, 1, 1);
  
    //get pixel color
    const i = ctx!.getImageData(0, 0, 1, 1).data;
  
    // this.backgroundColor = `rgba(${i[0]},${i[1]},${i[2]},${i[3]})`
    this.backgroundColor = `rgba(${i[0]},${i[1]},${i[2]},0.1)`
    // console.log(this.backgroundColor);
    // console.log("#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1));
  }
}
