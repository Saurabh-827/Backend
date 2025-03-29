const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/multer");
const { File } = require("../models");
const { v4: uuidv4 } = require("uuid");

const uploadFile = async (req, res) => {
	upload(req, res, async (err) => {
		if (!req.file) return res.status(400).json({ error: "No file uploaded" });
		if (err)
			return res.status(400).json({
				message: "Error at initial of file upload",
				error: err.message,
				err,
			});

		try {
			// ✅ Upload to Cloudinary
			const result = await new Promise((resolve, reject) => {
				cloudinary.uploader
					.upload_stream({ folder: "uploads" }, (error, result) =>
						error ? reject(error) : resolve(result)
					)
					.end(req.file.buffer);
			});

			// ✅ Save to PostgreSQL
			const newFile = await File.create({
				fileId: uuidv4(),
				folderId: req.body.folderId || null,
				name: req.file.originalname,
				url: result.secure_url,
				type: req.file.mimetype,
				size: req.file.size,
				uploadedAt: new Date(),
			});

			res.status(201).json({
				message: "File uploaded successfully",
				file: newFile,
			});
		} catch (error) {
			console.error("Cloudinary Upload Failed:", error);
			res.status(500).json({ error: "Cloudinary upload failed" });
		}
	});
};

module.exports = { uploadFile };
