const bcrypt = require("bcrypt");

const { User } = require("../models");
const { generateJWT } = require("../utils");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user)
      return res
        .status(400)
        .json({ msg: "User with this email does not exist" });

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      return res.status(400).json({ msg: "Incorrect password" });

    const token = await generateJWT(user.id);

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contact with the administrator",
    });
  }
};

module.exports = {
  login,
};
