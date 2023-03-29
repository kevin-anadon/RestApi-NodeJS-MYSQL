const jwt = require("jsonwebtoken")

const generateJWT = async id => {
  const payload = { id }
  const secret = process.env.SECRETORPRIVATEKEY
  try {
    const token = await jwt.sign(payload, secret, { expiresIn: "4h" })
    return token
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  generateJWT,
}
