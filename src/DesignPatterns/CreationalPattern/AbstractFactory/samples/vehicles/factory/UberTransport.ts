import { Airplane } from '../aerial/Airplane'
import { IAircraft } from '../aerial/interfaces/IAircraft'
import { Car } from '../land/Car'
import { ILandVehicle } from '../land/interfaces/ILandVehicle'
import { ITransportFactory } from './interfaces/ITransportFactory'

export class UberTransport implements ITransportFactory {
  createTransportLandVehicle(): ILandVehicle {
    return new Car()
  }

  createTransportAircraft(): IAircraft {
    return new Airplane()
  }
}
