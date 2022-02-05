import { ILandVehicle } from './interfaces/ILandVehicle'

export class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Starting route...')
  }

  getCargo(): void {
    console.log("We pick up the order, we're ready!")
  }
}
