const bcrypt = require('bcrypt')

const encrypt = async (plainText) => {

    const salt = await bcrypt.genSalt(10)
    const cipherText = await bcrypt.hash(plainText, salt)

    return cipherText

}

module.exports = encrypt