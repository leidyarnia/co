import { MongoClient } from "mongodb"


class Database {
  static initialize () {

  
    const client = new MongoClient('mongodb+srv://leidianny:leidianny123@cluster0.topdxig.mongodb.net/?retryWrites=true&w=majority')
  
    const collection = client.db("Concessionaria").collection("Carros")
  
    return { client, collection }
  }
}  
  export { Database }