const { uploadToCloudinary } = require("../config/cloudinary.js");
const fs = require("fs");

const cloudinaryUpload = async (file) => {
	try {
		const cloudinaryResponse = await uploadToCloudinary(file.path);
		fs.unlinkSync(file.path, (err) => {
			console.error(err);
		});
		return cloudinaryResponse;
	} catch (error) {
		console.error(error);
	}
};

module.exports = { cloudinaryUpload };
