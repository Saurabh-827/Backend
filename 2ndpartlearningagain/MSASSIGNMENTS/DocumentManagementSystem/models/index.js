"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,
		port: config.port,
		dialectOptions: {
			ssl: {
				require: true,
			},
		},
	},
	config
);

// ✅ Load all models dynamically
fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		if (!model || !model.name) {
			console.error(`Model not loaded correctly from file: ${file}`);
		} else {
			db[model.name] = model; // ✅ Store models correctly
		}
	});

// ✅ Define associations
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

// ✅ Export all models correctly
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; // ✅ Fix export
