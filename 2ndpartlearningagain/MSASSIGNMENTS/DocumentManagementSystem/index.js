const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { sequelize } = require("./models/index.js");
const { uploadFile } = require("./controllers/uploadFile.js");
const PORT = process.env.PORT || 4000;

// Testing database connection
sequelize
	.authenticate()
	.then(() => {
		console.log("Database is connected.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

app.post("/folder/create", uploadFile);
app.listen(PORT, () => {
	console.log("Server is running at port :", PORT);
});
