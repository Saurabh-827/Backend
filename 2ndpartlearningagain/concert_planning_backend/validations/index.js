function validateAfterPartyQueryParams(query) {
	const errors = [];
	if (!query.city) {
		errors.push("City is required.");
	}
	return errors;
}

function validateConcertsByQueryParams(query) {
	const errors = [];
	if (!query.artist) {
		errors.push("Artist is required.");
	}
	if (!query.city) {
		errors.push("City is required.");
	}
	return errors;
}

function validateMerchandiseStallsByQueryParams(query) {
	const errors = [];
	if (!query.stallName) {
		errors.push("StallName is required.");
	}
	return errors;
}

module.exports = {
	validateAfterPartyQueryParams,
	validateConcertsByQueryParams,
	validateMerchandiseStallsByQueryParams,
};
