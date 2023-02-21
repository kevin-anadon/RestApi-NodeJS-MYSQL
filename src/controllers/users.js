const { User } = require("../models");
const { encrypt } = require("../utils");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      offset: Number(req.query.since) || 0,
      limit: Number(req.query.limit) || 10,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(503).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName || null,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      phone: req.body.phone,
      email: req.body.email,
      password: encrypt(req.body.password),
      gender: req.body.gender,
      role: req.body.role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, ...update } = req.body;
    if (password) { update.password = encrypt(password) }
    const updatedRows = await User.update(update, { where: { id } });
    res.status(200).send(`Updated rows: ${updatedRows}`);
  } catch (error) {
    res.status(503).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("Deleted");
  } catch (error) {
    res.status(503).send(error.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
