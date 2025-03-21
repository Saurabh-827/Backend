const path = require("path");

const fileTypeValidator = (file) => {
	const allowedFileTypes = /csv|jpg|jpeg|png|gif|pdf|ppt/;
	const extname = allowedFileTypes.test(
		path.extname(file.originalname).toLowerCase()
	);
	const mimeType = allowedFileTypes.test(file.mimetype);

	return extname && mimeType;
};

module.exports = { fileTypeValidator };
