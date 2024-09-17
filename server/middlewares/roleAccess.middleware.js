const roleAccess = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(403).json({ msg: "unauthorized access" })
            return
        }
        next()
    }
}

module.exports = roleAccess