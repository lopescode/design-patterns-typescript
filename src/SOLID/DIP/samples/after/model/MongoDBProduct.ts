import { IDbProduct } from './IDbProduct'

export class MongoDBProduct implements IDbProduct {
  getProductById(productId: number): string {
    return `MongoDB: Displaying product data: ${productId}`
  }
}
