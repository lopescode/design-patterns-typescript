import { IVehicle } from './vehicles/interfaces/IVehicle'

export abstract class Transport {
  startTransport(): void {
    this.createTransport().startRoute()
  }

  protected abstract createTransport(): IVehicle
}
