const { sequelize } = require("./models");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { createTour, getTour } = require("./controllers/dataController");
const {
	getConcerts,
	getAfterParties,
	getMerchandiseStalls,
} = require("./controllers/tourController");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/tour", createTour);
app.get("/tour/:id", getTour);

app.get("/data/concerts", getConcerts);
app.get("/data/afterParties", getAfterParties);
app.get("/data/merchandiseStalls", getMerchandiseStalls);

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
