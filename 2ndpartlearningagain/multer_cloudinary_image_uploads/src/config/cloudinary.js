const cloudinary = require("cloudinary").v2;
const crypto = require("crypto");
require("dotenv").config(); // Ensure environment variables are loaded

// Configure Cloudinary
const cloudinaryConfig = () => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});
};

// Secure uploads to Cloudinary by using hashing ("sha1") algorithm to generate a signature
const generateSignature = (paramsToSign) => {
	const { api_secret } = cloudinary.config();
	const sortedParams = Object.keys(paramsToSign)
		.sort()
		.map((key) => `${key}=${paramsToSign[key]}`)
		.join("&");

	const signature = crypto
		.createHash("sha1")
		.update(sortedParams + api_secret)
		.digest("hex");

	return signature;
};

// Upload file to Cloudinary
const uploadToCloudinary = async (filePath) => {
	try {
		cloudinaryConfig();
		const timestamp = Math.round(new Date().getTime() / 1000);
		const paramsToSign = {
			timestamp,
		};
		const signature = generateSignature(paramsToSign);
		const result = await cloudinary.uploader.upload(filePath, {
			...paramsToSign,
			signature,
			api_key: process.env.CLOUDINARY_API_KEY,
		});
		return result;
	} catch (error) {
		console.error(error);
	}
};

module.exports = { uploadToCloudinary };
