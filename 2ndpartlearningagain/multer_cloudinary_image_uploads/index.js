const express = require("express");
const fs = require("fs");
const path = require("path");
const fileRouter = require("./src/router/fileRouter.js"); // Correct import
const { fileURLToPath } = require("url");

const app = express();

// Get the current file name and directory name
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Define the upload directory path
const uploadDir = path.join(__dirname, "uploads");

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(uploadDir));

// Use the file router for handling file-related routes
app.use("/files", fileRouter);

// Define a default route
app.use("/", (req, res) => {
	res.send("Welcome to file/image upload");
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
