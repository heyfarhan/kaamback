require('module-alias/register');
require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())

const cookieParser = require("cookie-parser")
app.use(cookieParser())


const signupRoutes = require("./routes/signup.routes")
const loginRoutes = require("./routes/login.routes")
const carrerRoutes = require("./routes/career.routes")
const authenticateToken = require("./middlewares/authenticateToken.middleware")

const connectDb = require("./utils/db")
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello World",
        success: true
    })

})


app.use('/api/auth', signupRoutes)
app.use('/api/auth', loginRoutes)
app.use('/api/career', authenticateToken, carrerRoutes)

const PORT = process.env.PORT || 8000
module.exports = app