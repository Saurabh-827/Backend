const axiosInstance = require("./lib/axios");
require("dotenv").config();

//creating axios instance
axiosInstance
	.get("/health")
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log("Error while fetching axiosInstance.", error);
	});

const getConcertsByArtistAndCity = async (artist, city) => {
	try {
		const response = await axiosInstance.get("/concerts/search", {
			params: {
				artist: artist,
				city: city,
			},
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

getConcertsByArtistAndCity("Taylor Swift", "Las Vegas")
	.then((concerts) => {
		console.log("Concerts are ", concerts);
	})
	.catch((error) => {
		console.log("Error while fetching concerts.", error);
	});
