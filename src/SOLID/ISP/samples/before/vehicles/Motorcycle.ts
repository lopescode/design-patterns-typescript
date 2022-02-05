import { IVehicle } from './IVehicle'

export class Motorcycle implements IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine)
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
    throw new Error('Method not implemented.')
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(
      `Creating a motorcycle: ${color}, ${year}, ${engine} engine capacity`
    )
    this.startVehicle()
  }
}
