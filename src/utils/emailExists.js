const { User } = require("../models")

const emailExists = async email => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    })
    if (user) {
      throw new Error(`The email: ${email} it is already registered`)
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  emailExists,
}
