import { DbProductFactory } from '../factory/DbProductFactory'

export class Payment {
  pay(productId: number): void {
    const dbProduct = DbProductFactory.create()

    const product = dbProduct.getProductById(productId)

    console.log(product)
  }
}
