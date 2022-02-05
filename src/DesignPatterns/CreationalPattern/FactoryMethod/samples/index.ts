import { CarTransport } from './transport/CarTransport'
import { MotorcycleTransport } from './transport/MotorcycleTransport'

declare let process: any

if (process.argv.includes('--uber')) {
  new CarTransport().startTransport()
} else if (process.argv.includes('--log')) {
  new MotorcycleTransport().startTransport()
} else {
  const error = new Error('Please select delivery type!')
  console.log(error.message)
}
