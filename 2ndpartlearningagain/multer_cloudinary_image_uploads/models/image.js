module.exports = (Sequelize, DataTypes) => {
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
			Sequelize,
			modelName: "Image",
		}
	);
	return Image;
};
