export class MySQLProduct {
  getProductById(productId: number): string {
    return `MySQL: Displaying product data: ${productId}`
  }
}
