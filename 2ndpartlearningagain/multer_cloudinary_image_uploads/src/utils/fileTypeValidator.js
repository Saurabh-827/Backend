const path = require("path");
const fileTypeValidator = (file) => {
	const fileTypes = /jpeg|jpg|png|gif/;
	const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); // changing lowercase because filetypes are in lowercase
	const mimeType = fileTypes.test(file.mimeType); // image/jpeg

	return extname && mimeType;
};
module.exports = { fileTypeValidator };
