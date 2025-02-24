const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {
	createItinerary,
	getItinerary,
} = require("./controllers/dataController");
const {
	getFlights,
	getHotels,
	getSites,
	getFlightsByOriginAndDestination,
	getHotelsByLocation,
	getSitesByLocation,
} = require("./controllers/itineraryController");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights", getFlights);
app.get("/data/hotels", getHotels);
app.get("/data/sites", getSites);
app.get("/data/flights/search", getFlightsByOriginAndDestination);
app.get("/data/hotels/search", getHotelsByLocation);
app.get("/data/sites/search", getSitesByLocation);

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.error("Error connecting to the database: ", error);
	});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
