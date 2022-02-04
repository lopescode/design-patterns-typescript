import { Car } from './vehicles/Car'
import { Motorcycle } from './vehicles/Motorcycle'
import { TypeVehicle } from './vehicles/TypeVehicle'

const type = TypeVehicle.CAR

let vehicle

if (type === TypeVehicle.CAR) {
  vehicle = new Car('Yellow', 2022, 2.0, 4, 4)
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle('Yellow', 2022, 250)
}
