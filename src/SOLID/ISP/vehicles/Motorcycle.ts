import { IVehicleMotorcycle } from './IVehicleMotorcycle'

export class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine)
  }

  startVehicle(): void {
    console.log('Starting the engines...')
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(
      `Creating a motorcycle: ${color}, ${year}, ${engine} engine capacity`
    )
    this.startVehicle()
  }
}
