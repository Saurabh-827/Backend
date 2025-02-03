//validations functions
const isRequestBodyValid = (body) => {
	return body.username && body.email;
};

const isEmailValid = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

module.exports = { isRequestBodyValid, isEmailValid };
