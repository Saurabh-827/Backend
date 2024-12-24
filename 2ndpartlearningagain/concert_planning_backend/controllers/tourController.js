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

module.exports = { getMerchandiseStalls, getConcerts, getAfterParties };
