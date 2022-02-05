import { IAircraft } from './interfaces/IAircraft'

export class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Starting takeoff...')
  }

  getCargo(): void {
    console.log("We pick up the order, turn on the propellers... we're ready!")
  }

  checkWind(): void {
    console.log('Wind at 25km/h, southeast, winds ok!')
  }
}
