let { DataTypes, sequelize } = require("../lib/index");

let post = sequelize.define("post", {
	name: DataTypes.STRING,
	author: DataTypes.STRING,
	title: DataTypes.STRING,
	content: DataTypes.STRING,
});

module.exports = { post };
