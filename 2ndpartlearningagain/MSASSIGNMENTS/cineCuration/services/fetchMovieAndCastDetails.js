const { getActors } = require("../controllers/searchMovie");
const axiosInstance = require("../lib/axios.lib.js");

const fetchMovieAndCastDetails = async (movieId) => {
	try {
		const responseMovie = await axiosInstance.get(`/movie/${movieId}`);
		console.log("responseMovie", responseMovie);
		const responseCast = await axiosInstance.get(`/movie/${movieId}/credits`);

		const newResponseCast = responseCast.data.cast
			.filter((actor) => actor.known_for_department === "Acting")
			.slice(0, 5)
			.map((actor) => ({
				name: actor.name,
			}))
			.join(", ");
		console.log("responseCast", newResponseCast);
		const movieDetails = {
			title: responseMovie.data.title,
			tmdbId: responseMovie.data.id,
			genre: responseMovie.data.genres.map((genre) => genre.name).join(", "),
			actors: newResponseCast,
			releaseYear: responseMovie.data.release_date
				? responseMovie.release_date.split("-")[0]
				: "N/A",
			rating: responseMovie.data.vote_average,
			description: responseMovie.data.overview,
		};
		console.log("movieDetails", movieDetails);
		return movieDetails;
	} catch (error) {
		console.error("Error fetching movie details:", error.message);
		return {};
	}
};
module.exports = { fetchMovieAndCastDetails };
