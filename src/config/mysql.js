const { Sequelize } = require("sequelize");
const success = require("console-success");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  logging: false, // Prevents a huge amount of logs
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.success("MYSQL connection successful");
    await sequelize.sync();
  } catch (err) {
    console.error("Error in the MYSQL connection: ", err);
  }
};

module.exports = { sequelize, dbConnect };
