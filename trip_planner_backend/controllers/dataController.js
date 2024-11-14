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
	} catch (error) {
		console.log(error);
	}
	return createItinerary;
};
