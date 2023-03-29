const { checkPhone } = require("./checkPhone");
const { validRole } = require("./validRole");
const { hasRole } = require("./hasRole");
const { userExistsId } = require("./userExistsId");
const { closeDbConnection } = require("./closeDbConnection");
const { userIdFromPhone } = require("./userIdFromPhone");
const { emailExists } = require("./emailExists");
const { encrypt } = require("./encrypt");
const { generateJWT } = require("./generateJWT");

module.exports = {
  checkPhone,
  validRole,
  hasRole,
  userExistsId,
  closeDbConnection,
  userIdFromPhone,
  emailExists,
  encrypt,
  generateJWT,
};
