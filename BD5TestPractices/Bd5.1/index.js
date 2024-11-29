let express = require("express");
let app = express();
let { track } = require("./models/track.model");
let { post } = require("./models/post.model");
let { sequelize } = require("./lib/index");

//Data For Seeding
let movieData = [
	{
		name: "Raabta",
		genre: "Romantic",
		release_year: 2012,
		artist: "Arijit Singh",
		album: "Agent Vinod",
		duration: 4,
	},
	{
		name: "Naina Da Kya Kasoor",
		genre: "Pop",
		release_year: 2018,
		artist: "Amit Trivedi",
		album: "Andhadhun",
		duration: 3,
	},
	{
		name: "Ghoomar",
		genre: "Traditional",
		release_year: 2018,
		artist: "Shreya Ghoshal",
		album: "Padmaavat",
		duration: 3,
	},
	{
		name: "Bekhayali",
		genre: "Rock",
		release_year: 2019,
		artist: "Sachet Tandon",
		album: "Kabir Singh",
		duration: 6,
	},
	{
		name: "Hawa Banke",
		genre: "Romantic",
		release_year: 2019,
		artist: "Darshan Raval",
		album: "Hawa Banke (Single)",
		duration: 3,
	},
	{
		name: "Ghungroo",
		genre: "Dance",
		release_year: 2019,
		artist: "Arijit Singh",
		album: "War",
		duration: 5,
	},
	{
		name: "Makhna",
		genre: "Hip-Hop",
		release_year: 2019,
		artist: "Tanishk Bagchi",
		album: "Drive",
		duration: 3,
	},
	{
		name: "Tera Ban Jaunga",
		genre: "Romantic",
		release_year: 2019,
		artist: "Tulsi Kumar",
		album: "Kabir Singh",
		duration: 3,
	},
	{
		name: "First Class",
		genre: "Dance",
		release_year: 2019,
		artist: "Arijit Singh",
		album: "Kalank",
		duration: 4,
	},
	{
		name: "Kalank Title Track",
		genre: "Romantic",
		release_year: 2019,
		artist: "Arijit Singh",
		album: "Kalank",
		duration: 5,
	},
];

let postData = [
	{
		name: "John Doe",
		author: "Jane Smith",
		title: "Introduction to JavaScript",
		content:
			"JavaScript is a versatile programming language used for web development.",
	},
	{
		name: "Alice Johnson",
		author: "Bob Brown",
		title: "Understanding CSS",
		content: "CSS is used to style and layout web pages.",
	},
	{
		name: "Charlie Davis",
		author: "Dana White",
		title: "Getting Started with HTML",
		content: "HTML is the standard markup language for creating web pages.",
	},
	{
		name: "Eve Black",
		author: "Frank Green",
		title: "Advanced Node.js",
		content: "Node.js allows you to run JavaScript on the server-side.",
	},
	{
		name: "Grace Lee",
		author: "Hank Hill",
		title: "React Basics",
		content: "React is a JavaScript library for building user interfaces.",
	},
];

//functions

async function fetchAllTracks() {
	let tracks = await track.findAll();
	return { tracks };
}

async function fetchTrackById(id) {
	let trackData = await track.findOne({ where: { id } });
	return { track: trackData };
}
async function fetchTracksByArtist(artist) {
	let tracks = await track.findAll({ where: { artist } });

	return { track: tracks };
}
async function sortTrackByReleaseYear(order) {
	let sortedTracks = await track.findAll({ order: [["release_year", order]] });
	return { tracks: sortedTracks };
}
//API(routes) for the tracks
app.get("/seed_track_db", async (req, res) => {
	try {
		await sequelize.sync({ force: true });
		await track.bulkCreate(movieData);
		res.status(200).json("Track Data Seeded Into Database.");
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error seeding the track data", error: error.message });
	}
});

app.get("/tracks", async (req, res) => {
	try {
		let response = await fetchAllTracks();

		if (response.tracks.length === 0) {
			return res.status(404).json({ message: "No tracks found." });
		}
		return res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			message: "Error in the getting tracks data",
			error: error.message,
		});
	}
});

app.get("/tracks/details/:id", async (req, res) => {
	try {
		let result = await fetchTrackById(parseInt(req.params.id));
		if (result.track === null) {
			return res.status(404).json("No id's track is found.");
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({
			message: "Error in getting track details",
			error: error.message,
		});
	}
});

app.get("/tracks/artist/:artist", async (req, res) => {
	try {
		let result = await fetchTracksByArtist(req.params.artist);
		if (result.track.length === 0) {
			return res.status(404).json("Track is not found");
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: "error in track fetching through artist" });
	}
});

app.get("/tracks/sort/release_year", async (req, res) => {
	try {
		let result = await sortTrackByReleaseYear(req.query.order);

		if (result.tracks.length === 0) {
			return res.status(404).json({ message: "No tracks found" });
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
//API(routes) for the post
app.get("/seed_post_db", async (req, res) => {
	try {
		await sequelize.sync({ force: true });
		await post.bulkCreate(postData);
		res.status(200).json("Post data is seeded.");
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error in seeding post data.", error: error.message });
	}
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
