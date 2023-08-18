import { Router } from "express"
import { MakeCar } from "./factories/MakeCar.js"
import { Database } from "./database/DatabaseConfig.js"

const router = Router()
const { collection } = Database.initialize()
const controller = MakeCar.getInstance(collection)

router.post("/car", controller.create.bind(controller))
router.patch("/car/:id", controller.update.bind(controller))
router.get("/car/", controller.find.bind(controller) )
export { router }