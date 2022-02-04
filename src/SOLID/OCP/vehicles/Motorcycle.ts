import { IVehicleMotorcycle } from './IVehicleMotorcycle'

export class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine)
  }

  startVehicle(): void {
    console.log('Starting the engines...')
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Creating a car: ${color}, ${year}, ${engine} engine capacity`)

    this.startVehicle()
  }
}
