const upload = require("../middleware/fileUpload.js");
const { Router } = require("express");
const multer = require("multer");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");
const { fileController } = require("../controllers/fileController.js");
const { imageResize } = require("../middleware/imageResize.js");
const isFilePresent = require("../middleware/validators/isFilePresent.js");
const authenticateJWT = require("../middleware/authentication.js");

// Create a new router instance
const fileRouter = Router();

// Define a POST route for file uploads
fileRouter.post(
	"/upload",
	authenticateJWT,
	function (req, res, next) {
		// Use the upload middleware to handle file uploads
		upload(req, res, function (err) {
			// Handle Multer errors
			if (err instanceof multer.MulterError) {
				if (err.code === UNEXPECTED_FILE_TYPE.code) {
					return res.status(400).json({ error: { description: err.field } });
				}
			} else if (err) {
				// Handle other errors
				return res.status(500).json({ error: { description: err.message } });
			}
			// Proceed to the next middleware/controller
			next();
		});
	},
	isFilePresent,
	imageResize,
	fileController
);

module.exports = fileRouter;
