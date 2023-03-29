const bcrypt = require("bcrypt")

const encrypt = password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

module.exports = {
  encrypt,
}
