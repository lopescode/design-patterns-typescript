import { Bird } from './Bird'

// LSP Violation:
export class Penguin extends Bird {
  fly(speed: string): void {
    const error = new Error('Sorry, I cant fly')

    console.log(error.message)
  }
}
