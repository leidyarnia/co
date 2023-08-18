import { CarController } from "../controllers/CarController.js"
import { CarRepository } from "../repositories/CarRepository.js"
import { CarService } from "../services/CarServices.js"


class MakeCar {
  static getInstance(collection) {
    const repository = new CarRepository(collection)
    const service = new CarService(repository)
    const controller = new CarController(service)
    return controller
  }
}

export { MakeCar }