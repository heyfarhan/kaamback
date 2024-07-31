const express = require("express")
const signupRoute = require("./routes/signup.routes")

const app = express()

app.use(express.json())

app.get('/', (req, res) => {

    res.status(200).json({
        message: "Hello World",
        success: true
    })

})

app.use('/api/auth', signupRoute)

module.exports = app