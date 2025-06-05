import mongoose from "mongoose"
const DB_URL = "mongodb+srv://makwanaavi73:UyGvRi3nz1Pa4FUv@todo.kxrywbe.mongodb.net/?retryWrites=true&w=majority&appName=todo"
// mongodb+srv://makwanaavi73:UyGvRi3nz1Pa4FUv@todo.kxrywbe.mongodb.net/;
await mongoose.connect(DB_URL)

const db = mongoose.connection.db 
console.log("Db Connected")
mongoose.model("Todo", {})
export default db ;         