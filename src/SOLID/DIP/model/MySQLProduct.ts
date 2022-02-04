import { IDbProduct } from './IDbProduct'

export class MySQLProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MySQL: Displaying product data: ${productId}`
  }
}
