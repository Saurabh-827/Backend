const { DataTypes } = require("sequelize");
const sequelize = require("../lib/sequelize");

const user = sequelize.define(
	"user",
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		repoCount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: true,
		tableName: "users",
	}
);

module.exports = user;
