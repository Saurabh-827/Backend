module.exports = (sequelize, DataTypes) => {
	const afterParty = sequelize.define(
		"afterParty",
		{
			location: DataTypes.STRING,
			city: DataTypes.STRING,
			date: DataTypes.DATE,
			ticketPrice: DataTypes.FLOAT,
		},
		{
			timestamps: true,
			// tableName: "customAfterParties", // Custom table name
		}
	);
	return afterParty;
};
