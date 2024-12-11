require("dotenv").config();
const { Sequelize } = require("sequelize");
const config =
	require("../config/config")[process.env.NODE_ENV || "development"];
console.log(`NODE_ENV is set to: ${process.env.NODE_ENV}`);

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		port: config.port,
		dialect: "postgres",
		logging: config.logging,
	}
);

module.exports = sequelize;
