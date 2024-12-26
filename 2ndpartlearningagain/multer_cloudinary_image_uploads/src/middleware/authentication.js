const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
	const token = req.header("Authorization")?.split(" ")[1];
	if (!token) {
		return res
			.status(403)
			.json({ message: "No token provides, authorization denied." });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		return res
			.status(401)
			.json({ mesaage: "Invalid token, authorization is denied." });
	}
};

module.exports = authenticateJWT;
