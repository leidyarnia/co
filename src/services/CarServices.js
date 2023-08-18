class CarService {
    constructor(repository) {
      this.repository = repository
    }
  
    async create(data) {
      const result = await this.repository.create(data)
      return result
    }
  
    async update(id, data) {
        const carExists = await this.repository.getById(id)
        if (!carExists) {
          return "Car not found"
        }
    
        return this.repository.update(id, data)
    }
    async findCarByPlateNumber(plateNumber){
        const result = await this.repository.findCarByPlateNumber(plateNumber)
        return result
    }
  }
  
  export { CarService }