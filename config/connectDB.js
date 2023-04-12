// Require mongoose 
const mongoose = require("mongoose")

// Connect function 
const connect = async ()  => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("connected to DataBase succsessfully")
    } catch (error) {
        console.log(error)
    }
}

// Export 
module.exports = connect