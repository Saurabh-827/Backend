require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/sequelize");
const userModel = require("./models/user");
const app = express();

app.use(cors());
app.use(express.json());

//sequelize.sync(): Synchronizes models with the database, creating tables if they do not exist(if u sequelize.define() any model).
sequelize
	.sync()
	.then(() => {
		console.log("Database connected succesfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to databas.", error);
	});

app.get("/users", async (req, res) => {
	try {
		const users = await userModel.findAll();
		res.json({ users });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Failed to fetch users." });
	}
});

app.get("/users/:id", async (req, res) => {
	const userId = parseInt(req.params.id);
	try {
		const user = await userModel.findByPk(userId);

		if (user) {
			res.json({ user });
		} else {
			res.status(404).json({ message: "User not found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Failed to fetch user by id." });
	}
});

//SD hw 1.2

const games = [
	{
		id: 1,
		title: "The Legend of Zelda: Breath of the Wild",
		genre: "Action-adventure",
		platform: "Nintendo Switch",
		releaseYear: 2017,
	},
	{
		id: 2,
		title: "God of War",
		genre: "Action-adventure",
		platform: "PlayStation 4",
		releaseYear: 2018,
	},
	{
		id: 3,
		title: "Cyberpunk 2077",
		genre: "Role-playing",
		platform: "PC",
		releaseYear: 2020,
	},
	{
		id: 4,
		title: "Hollow Knight",
		genre: "Metroidvania",
		platform: "PC",
		releaseYear: 2017,
	},
	{
		id: 5,
		title: "Minecraft",
		genre: "Sandbox",
		platform: "Multi-platform",
		releaseYear: 2011,
	},
];

// Get all games
app.get("/games", (req, res) => {
	res.json({ games });
});

// Get game by ID
app.get("/games/:id", (req, res) => {
	const { id } = req.params;
	const game = games.find((g) => g.id === parseInt(id));

	if (game) {
		res.json({ game });
	} else {
		res.status(404).json({ message: "Game not found" });
	}
});

// SD 1.2hw2

const players = [
	{
		id: 1,
		name: "Virat Kohli",
		country: "India",
		role: "Batsman",
		runs: 12000,
		wickets: 4,
	},
	{
		id: 2,
		name: "James Anderson",
		country: "England",
		role: "Bowler",
		runs: 1243,
		wickets: 600,
	},
	{
		id: 3,
		name: "Kane Williamson",
		country: "New Zealand",
		role: "Batsman",
		runs: 7000,
		wickets: 29,
	},
	{
		id: 4,
		name: "Pat Cummins",
		country: "Australia",
		role: "Bowler",
		runs: 750,
		wickets: 250,
	},
	{
		id: 5,
		name: "Ben Stokes",
		country: "England",
		role: "All-rounder",
		runs: 4500,
		wickets: 150,
	},
];

app.get("/players", (req, res) => {
	res.json({ players });
});

app.get("/players/:id", (req, res) => {
	const { id } = req.params;
	const player = players.find((p) => p.id === parseInt(id));

	if (player) {
		res.json({ player });
	} else {
		res.status(404).json({ message: "Player not found" });
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
