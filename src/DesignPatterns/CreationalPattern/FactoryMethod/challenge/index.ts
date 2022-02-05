import { BicycleTransport } from './transport/BicycleTransport'
import { CarTransport } from './transport/CarTransport'
import { MotorcycleTransport } from './transport/MotorcycleTransport'
import { Transport } from './transport/Transport'

declare const process: any

let transport: Transport | undefined

if (process.argv.includes('--uber')) {
  transport = new CarTransport()
} else if (process.argv.includes('--log')) {
  transport = new MotorcycleTransport()
} else if (process.argv.includes('--bicycle')) {
  transport = new BicycleTransport()
} else {
  console.log(new Error('Please select delivery type!'))
}

if (transport) {
  transport.startTransport()
}
