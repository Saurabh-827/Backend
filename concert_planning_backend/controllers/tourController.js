const axios = require("axios");
//needed to load dotenv configuration?
const axiosInstance = axios.create({
	baseURL: process.env.MICROSERVICE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		CLIENT_KEY: process.env.CLIENT_KEY,
		CLIENT_SECRET: process.env.CLIENT_SECRET,
	},
});

const getConcerts = async (req, res) => {
	try {
		const response = await axiosInstance.get("/data/concerts");
		res.json(response.data);
	} catch (error) {
		res.status(500).json({
			error: "Failed to fetch concert data.",
			details: error.response?.data || error.message,
		});
	}
};

const getMerchandiseStalls = async (req, res) => {
	try {
		const response = await axiosInstance.get("/data/merchandiseStalls");
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch merchandisStalls" });
	}
};

const getAfterParties = async (req, res) => {
	try {
		const response = await axiosInstance.get("/data/afterParties");
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch afterParties." });
	}
};

module.exports = { getAfterParties, getConcerts, getMerchandiseStalls };