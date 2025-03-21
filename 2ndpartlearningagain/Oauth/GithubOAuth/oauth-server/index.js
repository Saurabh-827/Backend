const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
	return res.send(`<h1>Welcome to Github Oauth.</h1>`);
});

app.get("/auth/github", (req, res) => {
	try {
		const githubOauthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.Client_ID}&scope=user,repo,security_events`;
		return res.redirect(githubOauthUrl);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

app.get("/auth/github/callback", async (req, res) => {
	const { code } = req.query;
	try {
		const tokenResponse = await axios.post(
			"https://github.com/login/oauth/access_token",
			{
				client_id: process.env.Client_ID,
				client_secret: process.env.Client_Secret,
				code,
			},
			{
				headers: { Accept: "application/json" },
			}
		);
		const accessToken = tokenResponse.data.access_token;
		res.cookie("Access token", accessToken);
		return res.redirect(`${process.env.Fronted_url}/v1/profile/github`);
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on the localhost${PORT}`);
});
