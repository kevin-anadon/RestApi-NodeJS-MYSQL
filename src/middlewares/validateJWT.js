const jwt = require("jsonwebtoken");
const { User } = require("../models");

const validateJWT = async (req, res, next) => {
  const secret = process.env.SECRETORPRIVATEKEY;
  const token = req.header("jwt-token");
  if (!token)
    return res.status(401).json({ msg: "There is not token in the request" });
  try {
    const { id } = jwt.verify(token, secret);
    const user = await User.findByPk(id);
    if (!user)
      return res
        .status(401)
        .json({ msg: "Token not valid - User does not exist" });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      msg: "Token not valid",
    });
  }
};

module.exports = {
  validateJWT,
};
