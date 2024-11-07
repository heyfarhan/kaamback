const express = require("express")
const cookieParser = require("cookie-parser")
const path = require('path')

const signupRoutes = require("./routes/signup.routes")
const loginRoutes = require("./routes/login.routes")
const carrerRoutes = require("./routes/career.routes")
const userRoutes = require("./routes/user.routes")
const freelancerRoutes = require("./routes/freelancer.routes")
const companyRoutes = require("./routes/company.routes")

const authenticateToken = require("./middlewares/authenticateToken.middleware")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(express.static(path.resolve(path.dirname(__dirname) + '/public')));
app.use(express.static(path.resolve(path.dirname(__dirname) + '/client/dist')));

app.get('/', (req, res) => {

    res.status(200).json({
        message: "Hello World",
        success: true
    })

})

app.use('/api/auth', signupRoutes)
app.use('/api/auth', loginRoutes)
app.use('/api/career', authenticateToken, carrerRoutes)
app.use('/api/user', userRoutes)
app.use('/api/freelancer', authenticateToken, freelancerRoutes)
app.use('/api/company', authenticateToken, companyRoutes)

module.exports = app
