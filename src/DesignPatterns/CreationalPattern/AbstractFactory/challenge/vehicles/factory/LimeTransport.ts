import { Drone } from '../aerial/Drone'
import { IAircraft } from '../aerial/interfaces/IAircraft'
import { ILandVehicle } from '../land/interfaces/ILandVehicle'
import { Scooter } from '../land/Scooter'
import { ITransportFactory } from './interfaces/ITransportFactory'

export class LimeTransport implements ITransportFactory {
  createTransportLandVehicle(): ILandVehicle {
    return new Scooter()
  }

  createTransportAircraft(): IAircraft {
    return new Drone()
  }
}
