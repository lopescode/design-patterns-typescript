import { IVehicleCar } from './IVehicleCar'

export class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats)
  }

  startVehicle(): void {
    console.log('Starting the engines...')
  }

  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Creating a car: ${color}, ${year}, ${engine} potency, ${seats} seats`
    )

    this.startVehicle()
  }
}
