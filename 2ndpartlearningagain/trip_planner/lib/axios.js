const axios = require("axios"); //STEP:1 Install Axios
require("dotenv").config();

//STEP:2 Create Axios Instance

const axiosInstance = axios.create({
	baseURL: "https://trip-planner-invact.vercel.app/api/v1",
	headers: {
		CLIENT_KEY: process.env.client_key,
		CLIENT_SECRET: process.env.client_secret,
	},
});
console.log(axiosInstance.get(""));
module.exports = axiosInstance;
