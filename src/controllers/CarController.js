class CarController {
    constructor(service) {
      this.service = service
    }
  
    async create(req, res) {
      const result = await this.service.create(req.body)
  
      res.status(200).json(result)
    }
    
    async update(req, res) {
      const result = await this.service.update(req.params.id, req.body)
    
      res.json(result)
    }
    async find(req, res) {
        const result = await this.service.create(req.body)
    
        res.status(200).json(result)
      }
  }
  
  export { CarController }