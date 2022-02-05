import { IVehicle } from './interfaces/IVehicle'

export class Car implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Starting route...')
  }

  getCargo(): void {
    console.log("We take the passengers, we're ready!")
  }
}
