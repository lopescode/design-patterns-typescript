import { Client } from './vehicles/client/Client'
import Company from './vehicles/consts/Company'
import { ITransportFactory } from './vehicles/factory/interfaces/ITransportFactory'
import { LimeTransport } from './vehicles/factory/LimeTransport'
import { NineNineTransport } from './vehicles/factory/NineNineTransport'
import { UberTransport } from './vehicles/factory/UberTransport'

const currentCompany = Company.LIME

let factory: ITransportFactory | undefined

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport()
    break
  case Company.NINENINE:
    factory = new NineNineTransport()
    break
  case Company.LIME:
    factory = new LimeTransport()
    break
  default:
    console.error(`Unknown company: ${currentCompany}`)
}

if (factory) {
  const client = new Client(factory)
  client.startRoute()
}
