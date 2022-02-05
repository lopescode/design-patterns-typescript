import { IPaymentInstrument } from './IPaymentInstrument'

export class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log('Checking rewards points...')
  }

  collectPayment(): void {
    console.log('Payment made with rewards points successfully!')
  }
}
