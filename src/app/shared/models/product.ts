import { Discount, IDiscount } from "./discount"
import * as uuid from 'uuid';

export enum EProductType {
    Fruit = 'Fruit',
    Vegetal = 'Vegetal',
    ColdDrink = 'Cold drink',
    WarmDrink = 'Warm drink',
    ColdFood = 'Cold food',
    WarmFood = 'Warm food'
}

export interface IProduct {
    id: string
    name: string
    types: EProductType[]
    value: number
    profit: number
    price: number
    discount?: Discount
    img: string
    applyDiscount: () => number
    setDiscount: (discount: IDiscount) => void
}

export class Product implements IProduct {
    id: string
    name: string
    types: EProductType[]
    value: number
    profit: number
    price: number
    discount?: Discount
    img: string

    constructor(
        name: string,
        types: EProductType[],
        value: number,
        profit: number,
        img: string,
        discount?: Discount
    ) {
       this.id = uuid.v4()
       this.name = name
       this.types = types 
       this.value = value
       this.profit = profit
       this.price = value * (1 + (profit / 100))
       this.img = img
       if(discount)  this.setDiscount(discount)
    }

    setDiscount(discount: Discount) {
        this.discount = discount
    }
    applyDiscount() {
        if(!this.discount) return this.value
        return this.discount.apply(this.value)
    }
}