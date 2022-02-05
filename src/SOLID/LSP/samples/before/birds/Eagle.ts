import { Bird } from './Bird'

export class Eagle extends Bird {
  dive(): void {
    // ...
  }

  fly(speed: string): void {
    console.log(`Soaring through the sky at ${speed}`)
  }
}
