import { IVehicle } from './IVehicle'

export interface IVehicleMotorcycle extends IVehicle {
  configurationMotorcycle(color: string, year: number, engine: number): void
}
