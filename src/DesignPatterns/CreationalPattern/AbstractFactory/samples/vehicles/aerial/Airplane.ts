import { IAircraft } from './interfaces/IAircraft'

export class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Starting takeoff...')
  }

  getCargo(): void {
    console.log("We take the passengers, we're ready!")
  }

  checkWind(): void {
    console.log('Wind at 25km/h')
  }
}
