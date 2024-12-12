const axiosInstance = require("./lib/axios");
require("dotenv").config();

//checking whether axiosInstance is operational or not

axiosInstance
	.get("/health")
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log("Error while fetching axiosInstance.", error);
	});

const getFlights = async (origin, destination) => {
	try {
		const response = await axiosInstance.get("/flights/search", {
			params: {
				origin: origin,
				destination: destination,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

getFlights("bengaluru", "dehradun")
	.then((flights) => {
		console.log("Flights are ", flights);
	})
	.catch((error) => {
		console.log("Error while fetching flights.", error);
	});
