import { Db } from '../model/Db'
import { IDbProduct } from '../model/IDbProduct'
import { MongoDBProduct } from '../model/MongoDBProduct'
import { MySQLProduct } from '../model/MySQLProduct'

export class DbProductFactory {
  private static type: Db = Db.MYSQL

  public static create(): IDbProduct {
    if (DbProductFactory.type === Db.MONGODB) {
      return new MongoDBProduct()
    }

    return new MySQLProduct()
  }
}
