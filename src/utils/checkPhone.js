const { User } = require("../models");

const checkPhone = async (phone) => {
  if (phone) {
    try {
      const phoneQuery = await User.findOne({ where: { phone } });
      if (phoneQuery) {
        throw new Error("There is already a phone with this number");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = {
  checkPhone,
};
