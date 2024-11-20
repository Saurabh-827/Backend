const {
	concert: concertModel,
	afterParties: afterPartiesModel,
	merchandiseStalls: merchandiseStallsModel,
	tour: tourModel,
	tourItem: tourItemModel,
} = require("../models");

const createTour = async (req, res) => {
	try {
		const { afterParties, concerts, merchandiseStalls, name } = req.body;
		const newTour = await tourModel.create({ name });

		if (concerts && concerts.length > 0) {
			for (const concert of concerts) {
				const savedConcert = await concertModel.create(concert);

				await tourItemModel.create({
					tourId: newTour.id,
					itemId: savedConcert.id,
					type: "concert",
				});
			}
		}

		if (afterParties && afterParties.length > 0) {
			for (const afterParty of afterParties) {
				const savedAfterParties = await afterPartiesModel.create(afterParty);

				await tourItemModel.create({
					tourId: newTour.id,
					itemId: savedAfterParties.id,
					type: "afterParties",
				});
			}
		}

		if (merchandiseStalls && merchandiseStalls.length > 0) {
			for (const merchandiseStall of merchandiseStalls) {
				const savedMerchandiseStall = await merchandiseStallsModel.create(
					merchandiseStall
				);

				await tourItemModel.create({
					tourId: newTour.id,
					itemId: savedMerchandiseStall.id,
					type: "merchandiseStalls",
				});
			}
		}
		res.status(201).json({ message: "Tour created.", tour: newTour });
		// console.log("Creating tour:", newTour);
		// console.log("Concert data:", concerts);
		// console.log("AfterParties data:", afterParties);
		// console.log("MerchandiseStalls data:", merchandiseStalls);
	} catch (error) {
		console.error({ error: "Error during creation of tour", details: error });
		res.status(500).json({ error: "Internal server error." });
	}
};

const getTour = async (req, res) => {
	try {
		const tour = await tourModel.findByPk(req.params.id);
		if (!tour) {
			return res.status(404).json({ error: "Tour not found" });
		}
		const items = await tourItemModel.findAll({
			where: { tourId: tour.id },
		});

		const concerts = [];
		const afterParties = [];
		const merchandiseStalls = [];

		for (const item of items) {
			if (item.type === "concert") {
				const concertItem = await concertModel.findByPk(item.itemId);
				if (concertItem) concerts.push(concertItem);
			} else if (item.type === "afterParties") {
				const afterPartiesItem = await afterPartiesModel.findByPk(item.itemId);
				if (afterPartiesItem) afterParties.push(afterPartiesItem);
			} else if (item.type === "merchandiseStalls") {
				const merchandiseStallsItem = await merchandiseStallsModel.findByPk(
					item.itemId
				);
				if (merchandiseStallsItem)
					merchandiseStalls.push(merchandiseStallsItem);
			}
		}
		res.json({ tour, concerts, afterParties, merchandiseStalls });
	} catch (error) {
		console.error({ error: "Error in retrieve tour", details: error });
		res.status(500).json({ error: "Internal server error." });
	}
};

module.exports = { createTour, getTour };
