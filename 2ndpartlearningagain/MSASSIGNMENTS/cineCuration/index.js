const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index.js");
const { searchMovie } = require("./controllers/searchMovie.js");
const { createCuratedList } = require("./controllers/createCuratedList.js");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.get("/api/movies/search", searchMovie);
app.post("/api/curated-lists", createCuratedList);

sequelize
	.authenticate()
	.then(() => console.log("Database connected successfully."))
	.catch((error) => console.error("Unable to connect to database.", error));

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
