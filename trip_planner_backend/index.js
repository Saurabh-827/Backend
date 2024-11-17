const cors = require("cors");
const express = require("express");
require("dotenv").config();

const {
	createItinerary,
	getItinerary,
} = require("./controllers/dataController");
const {
	getFlights,
	getHotels,
	getSites,
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

sequelize
	.authenticate()
	.then(() => {
		console.log("Connected to database");
	})
	.catch((error) => {
		console.error("Unable to connect to database", error);
	});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
