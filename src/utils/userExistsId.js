const { User } = require("../models")

const userExistsId = async (id = -1) => {
  try {
    const user = await User.findByPk(id)
    if (!user) throw new Error(`User with id: ${id} does not exist`)
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  userExistsId,
}
