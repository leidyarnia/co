import { ObjectId } from "mongodb"
import { Car } from "../domain/Car.js"

class CarRepository {
  constructor(collection) {
    this.collection = collection
  }

  create(data) {
    const car = new Car(data)
    return this.collection.insertOne(car)
  }
  getById(id) {
    return this.collection.findOne({ _id: new ObjectId(id) })
  }

  update(id, data) {
    return this.collection.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        data
      }
    })
  }
  findCarByPlateNumber(plateNumber){
    return this.collection.find({plateNumber:{regex:plateNumber, options:"i"}}).toArray()
  }
  
}

export { CarRepository }