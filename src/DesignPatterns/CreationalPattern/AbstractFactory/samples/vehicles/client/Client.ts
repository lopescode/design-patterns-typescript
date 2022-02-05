import { IAircraft } from '../aerial/interfaces/IAircraft'
import { ITransportFactory } from '../factory/interfaces/ITransportFactory'
import { ILandVehicle } from '../land/interfaces/ILandVehicle'

export class Client {
  private landVehicle: ILandVehicle
  private aircraft: IAircraft

  constructor(factory: ITransportFactory) {
    this.landVehicle = factory.createTransportLandVehicle()
    this.aircraft = factory.createTransportAircraft()
  }

  startRoute(): void {
    this.landVehicle.startRoute()
    this.aircraft.startRoute()
  }
}
