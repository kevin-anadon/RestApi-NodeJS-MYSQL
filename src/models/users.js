const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(["M", "W"]),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(["admin", "user"]),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = {
  User,
};
