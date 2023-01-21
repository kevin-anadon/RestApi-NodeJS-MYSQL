const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const Track = sequelize.define(
  "tracks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    durationStart: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    durationEnd: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mediaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const Artist = sequelize.define("artists", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  nationality: {
    type: DataTypes.STRING,
  },
});

Artist.hasOne(Track, {
  foreignKey: "artistId",
});

module.exports = {
  Track,
};
