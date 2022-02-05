import { ILandVehicle } from './interfaces/ILandVehicle'

export class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Starting route...')
  }

  getCargo(): void {
    console.log("We pick up the passengers, we're ready!")
  }
}
