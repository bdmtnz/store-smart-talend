import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) _text!: string
  @Input({required: true}) _icon!: string
  @Input({required: false}) _size: number = 24

  get text() {
    return this._text
  }
  get icon() {
    return this._icon
  }
  get size() {
    return `${this._size}pt`
  }
}
