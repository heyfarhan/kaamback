const mongoose = require("mongoose")

const connectDb = async () => {

    await mongoose.connect(process.env.MONGODB_URI)
        // Promise.resolve()

        .then(() => {

            console.log("Database Connected")

        })
        .catch((err) => {

            console.log(err)
            console.log("Error in Connecting Database")

        })

}

module.exports = connectDb