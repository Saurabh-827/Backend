let { DataTypes, sequelize } = require("../lib/index");

let track = sequelize.define("track", {
	name: DataTypes.STRING,
	genre: DataTypes.STRING,
	release_year: DataTypes.INTEGER,
	artist: DataTypes.STRING,
	album: DataTypes.STRING,
	duration: DataTypes.INTEGER,
});

module.exports = { track };
