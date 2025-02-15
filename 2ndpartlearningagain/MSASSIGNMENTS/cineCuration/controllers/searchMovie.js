const axiosInstance = require("../lib/axios.lib.js");

// const getActors = async (movieId) => {
// 	try {
// 		const response = await axiosInstance.get(`/movie/${movieId}/credits`);
// 		const actors = response.data.cast
// 			.filter((actor) => actor.known_for_department === "Acting")
// 			.map((actor) => actor.name);
// 		return actors;
// 	} catch (error) {
// 		console.error("Error fetching actors:", error.message);
// 		return [];
// 	}
// };

const searchMovie = async (req, res) => {
	try {
		const { query } = req.query;

		if (!query) {
			return res.status(400).json({ error: "A search term is required." });
		}

		const response = await axiosInstance.get("/search/movie", {
			params: {
				query: query,
			},
		});

		return res.status(200).json(response.data.results);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Unable to fetch movies", error: error.message });
	}
};

module.exports = { searchMovie };
