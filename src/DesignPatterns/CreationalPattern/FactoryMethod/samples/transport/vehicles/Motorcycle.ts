import { IVehicle } from './interfaces/IVehicle'

export class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Starting route...')
  }

  getCargo(): void {
    console.log("We pick up the order, we're ready!")
  }
}
