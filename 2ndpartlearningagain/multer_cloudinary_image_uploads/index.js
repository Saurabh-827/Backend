const express = require("express");
const fs = require("fs");
const path = require("path");
const { fileRouter } = require("./src/router/fileRouter.js");
const { fileURLToPath } = require("url");

const app = express();
// Get the current file name and directory name
// const __filname = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filname);

// Define the upload directory path
const uploadDir = path.join(__dirname, "uploads");
// create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

app.use("src/uploads", express.static("src/uploads"));
app.use("/files", fileRouter);

app.use("/", (req, res) => {
	res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
