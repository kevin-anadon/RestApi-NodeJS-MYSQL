const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const Storage = sequelize.define(
  "storages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  Storage,
};
