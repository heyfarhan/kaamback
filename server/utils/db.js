const mongoose = require("mongoose")

const connectDb = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI env variable is not accesible.");
    }
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Database Connected")
    }).catch((err) => {
        console.log(err)
        console.log("Error in Connecting Database")
    })
}

module.exports = connectDb