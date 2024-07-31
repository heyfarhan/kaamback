const signup = (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {

        res.status(400).json({
            success: false,
        })

        return

    }

    res.json({
        success: true,
        email
    })

}

module.exports = {
    signup
}