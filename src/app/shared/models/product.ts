import { Discount, IDiscount } from "./discount"

export enum EProductType {
    Fruit = 'Fruit',
    Vegetal = 'Vegetal',
    ColdDrink = 'Cold drink',
    WarmDrink = 'Warm drink',
    ColdFood = 'Cold food',
    WarmFood = 'Warm food'
}

export class Product {
    id: string
    name: string
    types: EProductType[]
    value: number
    profit: number
    price: number
    discount?: Discount

    constructor(
        name: string,
        types: EProductType[],
        value: number,
        profit: number,
        discount?: Discount
    ) {
       this.id = Math.random().toString()
       this.name = name
       this.types = types 
       this.value = value
       this.profit = profit
       this.price = value * (1 + (profit / 100))
       if(discount)  this.applyDiscount(discount)
    }

    applyDiscount(discount: IDiscount) {
        this.value = discount.apply(this.value)
    }
}