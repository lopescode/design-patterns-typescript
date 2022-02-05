import { IAircraft } from '../../aerial/interfaces/IAircraft'
import { ILandVehicle } from '../../land/interfaces/ILandVehicle'

export interface ITransportFactory {
  createTransportLandVehicle(): ILandVehicle
  createTransportAircraft(): IAircraft
}
