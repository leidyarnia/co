class Car{
    constructor(data){
        this.brand = data.brand
        this.model = data.model
        this.plateNumber = data.plateNumber
        this.color = data.color
        this.isUsed = false
        this.year = data.year
        this.sold = false
        this.createdAt = new Date()
    }
}
export{Car}

//- Marca
//- Modelo
//- Placa
//- Cor
//- É usado?
// Ano
//- Vendido