const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { setSecureCookie } = require("./services/index.js");
const cookieParser = require("cookie-parser");
const { verifyAccessToken } = require("./middleware/index.js");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

app.get("/", (req, res) => {
	return res.send(`<h1>Welcome to Github Oauth.</h1>`);
});

app.get("/user/profile/github", verifyAccessToken, async (req, res) => {
	try {
		const { access_token } = req.cookies;
		const githubUserDataResponse = await axios.get(
			"https://api.github.com/user",
			{
				headers: { Authorization: `Bearer ${access_token}` },
			}
		);
		res.status(200).json({ user: githubUserDataResponse.data });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

app.get("/auth/github", (req, res) => {
	try {
		const githubOauthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user,repo,security_events`;
		return res.redirect(githubOauthUrl);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

app.get("/auth/github/callback", async (req, res) => {
	const { code } = req.query;
	if (!code) {
		return res.status(400).send("Authorization code is not provided.");
	}
	try {
		const tokenResponse = await axios.post(
			"https://github.com/login/oauth/access_token",
			{
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				code,
			},
			{
				headers: { Accept: "application/json" },
			}
		);
		const accessToken = tokenResponse.data.access_token;
		setSecureCookie(res, accessToken);
		// res.cookie("access_token", accessToken); //"access_token" use to describe that access_token=
		return res.redirect(`${process.env.Fronted_url}/v2/profile/github`);
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.get("/user/profile/google", verifyAccessToken, async (req, res) => {
	try {
		const { access_token } = req.cookies;
		const googleUserDataResponse = await axios.get(
			"https://www.googleapis.com/oauth2/v2/userinfo",
			{
				headers: { Authorization: `Bearer ${access_token}` },
			}
		);
		res.status(200).json({ user: googleUserDataResponse.data });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});
app.get("/auth/google", (req, res) => {
	const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:${PORT}/auth/google/callback&response_type=code&scope=profile email`;
	return res.redirect(googleAuthUrl);
});

app.get("/auth/google/callback", async (req, res) => {
	const { code } = req.query;
	if (!code) {
		return res.status(400).send("Authorization code is not provided.");
	}
	let accesstoken;
	try {
		const tokenResponse = await axios.post(
			"https://oauth2.googleapis.com/token",
			{
				client_id: process.env.GOOGLE_CLIENT_ID,
				client_secret: process.env.GOOGLE_CLIENT_SECRET,
				code,
				grant_type: "authorization_code",
				redirect_uri: `http://localhost:${PORT}/auth/google/callback`,
			},
			{
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
			}
		);
		accesstoken = tokenResponse.data.access_token;
		setSecureCookie(res, accesstoken);
		// res.cookie("access_token", accesstoken);
		return res.redirect(`${process.env.Fronted_url}/v2/profile/google`);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on the localhost${PORT}`);
});
