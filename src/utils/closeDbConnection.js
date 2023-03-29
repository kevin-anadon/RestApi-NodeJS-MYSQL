const { sequelize } = require("../config/mysql")

const closeDbConnection = () => {
  sequelize.close()
}

module.exports = {
  closeDbConnection,
}
