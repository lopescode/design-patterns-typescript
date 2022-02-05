export class Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  startVehicle(): void {
    console.log('Starting the engines...')
  }

  car(): void {
    console.log(
      `Creating a car: ${this.color}, ${this.year}, ${this.engine} potency, ${this.seats} seats, ${this.doors} doors`
    )

    this.startVehicle()
  }

  motorcycle(): void {
    console.log(
      `Creating a motorcycle: ${this.color}, ${this.year}, ${this.engine} engine capacity`
    )
    this.startVehicle()
  }
}
