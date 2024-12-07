const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
	{
		id: 1,
		username: "octocat",
		name: "The Octocat",
		repoCount: 8,
		location: "San Francisco",
	},
	{
		id: 2,
		username: "torvalds",
		name: "Linus Torvalds",
		repoCount: 25,
		location: "Portland",
	},
	{
		id: 3,
		username: "gaearon",
		name: "Dan Abramov",
		repoCount: 50,
		location: "London",
	},
	{
		id: 4,
		username: "addyosmani",
		name: "Addy Osmani",
		repoCount: 42,
		location: "Mountain View",
	},
	{
		id: 5,
		username: "tj",
		name: "TJ Holowaychuk",
		repoCount: 150,
		location: "Victoria",
	},
];

app.get("/users", (req, res) => {
	res.json({ users });
});

app.get("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const user = users.find((u) => u.id === userId);

	if (user) {
		res.json({ user });
	} else {
		res.status(404).json({ message: "User not found" });
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

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
