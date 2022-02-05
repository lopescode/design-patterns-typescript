import { NubankCard } from './NubankCard'

export class DebitCard extends NubankCard {
  validate(): void {
    console.log('Checking if you have enough balance...')
  }
}
