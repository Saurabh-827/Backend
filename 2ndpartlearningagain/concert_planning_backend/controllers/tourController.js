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
		const response = await axiosInstance.get("/merchandiseStalls");
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch merchandiseStalls." });
	}
};

const getConcerts = async (req, res) => {
	try {
		const response = await axiosInstance.get(`/concerts`);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch concert." });
	}
};

const getAfterParties = async (req, res) => {
	try {
		const response = await axiosInstance.get(`/afterParties`);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch after party." });
	}
};

module.exports = { getMerchandiseStalls, getConcerts, getAfterParties };
