const { Sequelize } = require("sequelize");

const config = require("../config/config.js")[
	process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,
		logging: config.logging,
		port: config.port,
	}
);

module.exports = sequelize;
