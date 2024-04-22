export enum EDiscountType {
    Percentage = 'Percentage',
    Difference = 'Difference'
}

export interface IDiscount {
    type: EDiscountType
    value: number
    apply(value: number): number
}

export class Discount implements IDiscount {
    type: EDiscountType
    value: number

    constructor(
        type: EDiscountType,
        value: number
    ) {
        this.type = type
        this.value = value
    }

    apply(value: number): number {
        let discounted = 0
        switch (this.type) {
            case EDiscountType.Difference:
                discounted = value - this.value
                break
            case EDiscountType.Percentage:
                discounted = value * (1 - (this.value / 100))
                break
            default:
                discounted = value - this.value
                break
        }
        return discounted
    }
}