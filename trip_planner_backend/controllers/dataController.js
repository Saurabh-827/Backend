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

		// Likely a keyword related to air travel or flight booking.
		if (flights && flights.length > 0) {
			for (const flight of flights) {
				const savedFlight = await create.flightModel(flight);
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
				const savedSites = await siteModel.create(site);
				await itineraryItemModel.create({
					itineraryId: newItinerary.id,
					itemId: savedSites.id,
					type: "site",
				});
			}
		}

		res
			.status(201)
			.json({ message: "Itinerary Created", itinerary: newItinerary });
	} catch (error) {
		console.log({ error: " Error creating itinerary" });
	}
	return createItinerary;
};
