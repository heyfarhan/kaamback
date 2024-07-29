require("dotenv").config()

const connectDb = require("./utils/db")
const app = require("./app")

const PORT = process.env.PORT || 8000

connectDb()

    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server Running on ${PORT}`)
        })

    })

    .catch((err) => {

        console.log(err)

    })
