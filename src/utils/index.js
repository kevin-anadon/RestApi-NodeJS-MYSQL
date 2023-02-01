const { checkPhone } = require("./checkPhone");
const { checkRole } = require("./checkRole");
const { userExistsId } = require("./userExistsId");
const { closeDbConnection } = require("./closeDbConnection");
const { userIdFromPhone } = require("./userIdFromPhone");

module.exports = {
  checkPhone,
  checkRole,
  userExistsId,
  closeDbConnection,
  userIdFromPhone
};
