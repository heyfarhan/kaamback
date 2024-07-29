const mongoose = require("mongoose")

const connectDb = async () => {

    mongoose.connect(process.env.MONGODB_URI)

        .then(() => {

            console.log("Database Connected")

        })
        .catch((err) => {

            console.log(err)
            console.log("Error in Connecting Database")

        })

}

module.exports = connectDb