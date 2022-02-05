import { IPaymentInstrument } from './IPaymentInstrument'

export abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log('Basic validation')
  }

  collectPayment(): void {
    console.log('Payment made successfully!')
  }
}
