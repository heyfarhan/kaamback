const User = require("@/models/user.model")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.authVerify = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
}

exports.login = async (req, res) => {
    console.log("login crediantles",req.body);
    try {
        const { email, password } = req.body;
        if (!email || !password)
            throw new Error("Email & Password are Required")

        const user = await User.findOne({ email })

        if (!user)
            throw Error("No User Exists")

        const isCorrect = await bcrypt.compare(password, user.password)

        if (!isCorrect)
            throw Error("Wrong Email or Password")

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            domian: '.kaamback.com',
            maxAge: 60 * 60 * 1000,
        })

        res.status(200).json({
            success: isCorrect,
            user: { _id: user._id, name: user.name, email: user.email, dateOfBirth: user.dateOfBirth, role: user.role }

        })

    } catch (err) {
        res.status(401).json({ success: false, msg: err.message })
    }
}

