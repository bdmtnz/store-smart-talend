import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({required: true}) _product!: IProduct

  get product() {
    return this._product
  }
}
