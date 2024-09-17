const bcrypt = require('bcryptjs')

const encrypt = async (plainText) => {
    // console.log("encytp text", plainText);
    const salt = await bcrypt.genSalt(10)
    const cipherText = await bcrypt.hash(plainText, salt)

    return cipherText

}

module.exports = encrypt