const {
	flight: flightModel,
	hotel: hotelModel,
	itinerary: itineraryModel,
	itineraryItem: itineraryItemModel,
	site: siteModel,
} = require("../models"); //renamed this just for clarity

const createItinerary = async (req, res) => {
	try {
		const { flights, hotels, sites, name } = req.body;
		const newItinerary = await itineraryModel.create({ name });

		if (flights && flights.length > 0) {
			for (const flight of flights) {
				const savedFlight = await flightModel.create(flight);
				await itineraryItemModel.create({
					itineraryId: newItinerary.id,
					itemId: savedFlight.id,
					type: "flight",
				});
			}
		}

		if (hotels && hotels.length > 0) {
			for (const hotel of hotels) {
				const savedHotel = await hotelModel.create(hotel);
				await itineraryItemModel.create({
					itineraryId: newItinerary.id,
					itemId: savedHotel.id,
					type: "hotel",
				});
			}
		}

		if (sites && sites.length > 0) {
			for (const site of sites) {
				const savedSite = await siteModel.create(site);
				await itineraryItemModel.create({
					itineraryId: newItinerary.id,
					itemId: savedSite.id,
					type: "site",
				});
			}
		}

		res
			.status(201)
			.json({ message: "Itinerary Created", itinerary: newItinerary });
	} catch (error) {
		console.error({ error: "Error creating itinerary", details: error });
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const getItinerary = async (req, res) => {
	try {
		const itinerary = await itineraryModel.findByPk(req.params.id);

		if (!itinerary) {
			return res.status(404).json({ error: "Itinerary not found" });
		}

		const items = await itineraryItemModel.findAll({
			where: { itineraryId: itinerary.id },
		});

		const flights = [];
		const hotels = [];
		const sites = [];

		for (const item of items) {
			if (item.type === "flight") {
				const flightItem = await flightModel.findByPk(item.itemId);
				if (flightItem) flights.push(flightItem);
			} else if (item.type === "hotel") {
				const hotelItem = await hotelModel.findByPk(item.itemId);
				if (hotelItem) hotels.push(hotelItem);
			} else if (item.type === "site") {
				const siteItem = await siteModel.findByPk(item.itemId);
				if (siteItem) sites.push(siteItem);
			}
		}

		res.json({ itinerary, flights, hotels, sites });
	} catch (error) {
		console.error({ error: "Failed to retrieve itinerary", details: error });
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = { createItinerary, getItinerary };
