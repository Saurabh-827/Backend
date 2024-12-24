const express = require("express");
require("dotenv").config();

const cors = require("cors");

const { createTour, getTour } = require("./controllers/dataController");
const {
	getMerchandiseStalls,
	getConcerts,
	getAfterParties,
	getConcertsByArtistAndCity,
	getMerchandiseStallsByStallName,
	getAfterPartiesByCity,
} = require("./controllers/tourController");

const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/tour", createTour);
app.get("/tour/:id", getTour);

app.get("/data/concerts", getConcerts);
app.get("/data/merchandiseStalls", getMerchandiseStalls);
app.get("/data/afterParties", getAfterParties);
app.get("/data/concerts/search", getConcertsByArtistAndCity);
app.get("/data/merchandiseStalls/search", getMerchandiseStallsByStallName);
app.get("/data/afterParties/search", getAfterPartiesByCity);

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.error("Error to connecting to database", error);
	});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
