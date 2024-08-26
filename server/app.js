const express = require("express")
const cookieParser = require("cookie-parser")

const signupRoutes = require("./routes/signup.routes")
const loginRoutes = require("./routes/login.routes")
const carrerRoutes = require("./routes/career.routes")
const authenticateToken = require("./middlewares/authenticateToken.middleware")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {

    res.status(200).json({
        message: "Hello World",
        success: true
    })

})

app.use('/api/auth', signupRoutes)
app.use('/api/auth', loginRoutes)
app.use('/api/career', authenticateToken, carrerRoutes)

module.exports = app