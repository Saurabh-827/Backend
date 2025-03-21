const multer = require("multer");
const { fileTypeValidator } = require("../utils/fileTypeValidator.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");

// 🔹 Use memory storage (no unnecessary disk writes)
const storage = multer.memoryStorage();

// 🔹 Validate file type before upload
const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		const isFileTypeAllowed = fileTypeValidator(file);
		if (isFileTypeAllowed) {
			return cb(null, true);
		} else {
			return cb(
				new multer.MulterError(
					UNEXPECTED_FILE_TYPE.code,
					UNEXPECTED_FILE_TYPE.message
				)
			);
		}
	},
}).single("file"); // Single file upload

module.exports = upload;
