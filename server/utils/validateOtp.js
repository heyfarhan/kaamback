const bcrypt = require("bcryptjs")

const validateOtp = async (otp, user) => {

    if (!user.otp || !user.iat) {
        throw new Error("Error Occured Try Resend Otp")
        
    }

    const issuedAt = new Date(user.iat)
    const currentTime = new Date()
    const expirationTime = new Date(issuedAt.getTime() + 10 * 60000);

    if (currentTime > expirationTime) {
        throw new Error("Otp Expired")
        
    }

    const isCorrect = await bcrypt.compare(otp, user.otp)

    return isCorrect
}

module.exports = validateOtp