const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Image extends Model {}

	Image.init(
		{
			url: DataTypes.STRING,
			secure_url: DataTypes.STRING,
			tags: DataTypes.STRING,
			uploadedAt: DataTypes.DATE,
			user_id: DataTypes.INTEGER,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
			isDeleted: DataTypes.BOOLEAN,
		},
		{
			sequelize, // Pass the sequelize instance here
			modelName: "Image",
		}
	);

	return Image;
};
