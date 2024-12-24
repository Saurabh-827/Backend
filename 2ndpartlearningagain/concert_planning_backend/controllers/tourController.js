const {
	validateAfterPartyQueryParams,
	validateConcertsByQueryParams,
	validateMerchandiseStallsByQueryParams,
} = require("../validations/index");
const axios = require("axios");
require("dotenv").config();

const axiosInstance = axios.create({
	baseURL: process.env.MICROSERVICE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		CLIENT_KEY: process.env.CLIENT_KEY,
		CLIENT_SECRET: process.env.CLIENT_SECRET,
	},
});

const getConcertsByArtistAndCity = async (req, res) => {
	const errors = validateConcertsByQueryParams(req.query);
	if (errors.length > 0) return res.status(400).json({ errors });
	try {
		const { artist, city } = req.query;
		const response = await axiosInstance.get(
			`/concerts/search?artist=${artist}&city=${city}`
		);
		res.json(response.data);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Failed to fetch concert by artist and city." });
	}
};

const getMerchandiseStallsByStallName = async (req, res) => {
	const errors = validateMerchandiseStallsByQueryParams(req.query);
	if (errors.length > 0) return res.status(400).json({ errors });
	try {
		const stallName = req.query.stallName;
		const response = await axiosInstance.get(
			`/merchandiseStalls/search?stallName=${stallName}`
		);
		res.json(response.data);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Failed to fetch merchandiseStalls by stall Name" });
	}
};

const getAfterPartiesByCity = async (req, res) => {
	const errors = validateAfterPartyQueryParams(req.query);
	if (errors.length > 0) return res.status(400).json({ errors });
	try {
		const city = req.query.city;
		const response = await axiosInstance.get(
			`/afterParties/search?city=${city}`
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch afterparty by city." });
	}
};
const getMerchandiseStalls = async (req, res) => {
	try {
		const test_error = req.query.test_error;
		const rate_limit = req.query.rate_limit;
		const response = await axiosInstance.get(
			`/merchandiseStalls?test_error=${test_error}&rate_limit=${rate_limit}`
		);
		res.json(response.data);
	} catch (error) {
		console.error(error);

		if (error.response.status === 429) {
			return res
				.status(429)
				.json({ error: "Rate limit exceeded. Please try again later." });
		} else if (
			error.response.status === 500 &&
			error.response.data.error === "Simulated error for testing purposes."
		) {
			return res
				.status(500)
				.json({ error: "Simulated error for testing purposes." });
		}

		res.status(500).json({ error: "Failed to fetch merchandiseStalls." });
	}
};

const getConcerts = async (req, res) => {
	try {
		const test_error = req.query.test_error;
		const rate_limit = req.query.rate_limit;
		const response = await axiosInstance.get(
			`/concerts?test_error=${test_error}&rate_limit=${rate_limit}`
		);
		res.json(response.data);
	} catch (error) {
		console.error(error);

		if (error.response.status === 429) {
			return res
				.status(429)
				.json({ error: "Rate limit exceeded. Please try again later." });
		} else if (
			error.response.status === 500 &&
			error.response.data.error === "Simulated error for testing purposes."
		) {
			return res
				.status(500)
				.json({ error: "Simulated error for testing purposes." });
		}
		res.status(500).json({ error: "Failed to fetch concert." });
	}
};

const getAfterParties = async (req, res) => {
	try {
		const test_error = req.query.test_error;
		const rate_limit = req.query.rate_limit;
		const response = await axiosInstance.get(
			`/afterParties?test_error=${test_error}&rate_limit=${rate_limit}`
		);
		res.json(response.data);
	} catch (error) {
		console.error(error);

		if (error.response.status === 429) {
			return res
				.status(429)
				.json({ error: "Rate limit exceeded. Please try again later." });
		} else if (
			error.response.status === 500 &&
			error.response.data.error === "Simulated error for testing purposes."
		) {
			return res
				.status(500)
				.json({ error: "Simulated error for testing purposes." });
		}

		res.status(500).json({ error: "Failed to fetch after party." });
	}
};

module.exports = {
	getMerchandiseStalls,
	getConcerts,
	getAfterParties,
	getAfterPartiesByCity,
	getConcertsByArtistAndCity,
	getMerchandiseStallsByStallName,
};
