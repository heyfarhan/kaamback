// const bcrypt = require("bcryptjs")

// const validateOtp = async (otp, user, purpose) => {

//     // console.log(otp, user);
//     if (!user.otp || !user.iat) {
//         throw new Error("Error Occured Try Resend Otp")
//     }


//     if (purpose === "verify") {

//         const issuedAt = new Date(user.iat)
//         const currentTime = new Date()
//         const expirationTime = new Date(issuedAt.getTime() + 10 * 60000);

//         if (currentTime > expirationTime) {
//             throw new Error("Otp Expired")
//         }

//         const isCorrect = await bcrypt.compare(otp, user.otp)

//         return isCorrect
//     } else if (purpose === "authorize") {
//         const issuedAt = new Date(user.iat)
//         const currentTime = new Date()
//         const expirationTime = new Date(issuedAt.getTime() + 10 * 60000);

//         if (currentTime > expirationTime) {
//             throw new Error("Otp Expired")
//         }

//         const isCorrect = await bcrypt.compare(otp, user.otp)

//         return isCorrect
//     }
// }

// module.exports = validateOtp


const bcrypt = require("bcryptjs");

const validateOtp = async (otp, user, purpose) => {
    let otpData;

    if (purpose === "verify") {
        otpData = user.otp;
    } else if (purpose === "authorize") {
        otpData = user.otp;
    } else {
        throw new Error("Invalid purpose");
    }

    if (!otpData || !user.iat) {
        throw new Error("Error Occurred. Try Resend OTP.");
    }

    const issuedAt = new Date(user.iat);
    const currentTime = new Date();
    const expirationTime = new Date(issuedAt.getTime() + 10 * 60000); 

    // console.log("Issued At:", issuedAt);
    // console.log("Current Time:", currentTime);
    // console.log("Expiration Time:", expirationTime);

    if (currentTime > expirationTime) {
        throw new Error("OTP Expired");
    }

    const isCorrect = await bcrypt.compare(otp, otpData);
    return isCorrect;
};
module.exports=
    validateOtp
