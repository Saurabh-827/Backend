const { movie } = require("../models");
const { Op } = require("sequelize");
const searchMovieByGenreAndActor = async (req, res) => {
	try {
		const { genre, actor } = req.query;
		if (!genre && !actor) {
			return res.status(400).json({ message: "Genre and actor are required." });
		}
		const whereClause = {};
		if (genre) {
			whereClause.genre = { [Op.iLike]: `%${genre}%` };
		}
		if (actor) {
			whereClause.actors = { [Op.iLike]: `%${actor}%` };
		}
		const movies = await movie.findAll({
			where: whereClause,
			attributes: [
				"id",
				"title",
				"tmdbId",
				"genre",
				"actors",
				"releaseYear",
				"rating",
				"description",
				"createdAt",
				"updatedAt",
			],
		});
		if (movies.length === 0) {
			return res.status(404).json({ message: "Movies not found." });
		}
		return res.status(200).json({ movies });
	} catch (error) {
		return res.status(500).json({
			message: "Unable to search movie by genre and actor.",
			error: error.message,
		});
	}
};
module.exports = { searchMovieByGenreAndActor };
