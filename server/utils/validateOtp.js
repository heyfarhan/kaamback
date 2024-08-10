const bcrypt = require("bcrypt")

const validateOtp = async (otp, user) => {

    if (!user.otp || !user.iat) {
        throw Error("Error Occured Try Resend Otp")
        return
    }

    const issuedAt = new Date(user.iat)
    const currentTime = new Date()
    const expirationTime = new Date(issuedAt.getTime() + 10 * 60000);

    if (currentTime > expirationTime) {
        throw Error("Otp Expired")
        return
    }

    const isCorrect = await bcrypt.compare(otp, user.otp)

    return isCorrect
}

module.exports = validateOtp