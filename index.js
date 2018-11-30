'use strict';

const got = require('got');

module.exports = class {
	/**
	* @param {string} key    API key - Special access key from Airly
	*/
	constructor(key) {
		this.config = {
			headers: {
				apikey: key
			},
			json: true
		};
	}

	/**
	* @param {number} id   Installation ID - Unique number of the installation
	* @returns {object} Data from the installation
	*/
	async idData(id) {
		const response = await got(`https://airapi.airly.eu/v2/measurements/installation?installationId=${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} id   Installation ID - Unique number of the installation
	* @returns {object} Info about installation
	*/
	async idInfo(id) {
		const response = await got(`https://airapi.airly.eu/v2/installations/${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} lat  	Latitude - Geographical coordinate
	* @param {number} lng   Longitude - Geographical coordinate
	* @returns {object} Info about 3 nearest installations
	*/
	async nearestInstallations(lat, lng) {
		const search = await got(`https://airapi.airly.eu/v2/installations/nearest?lat=${lat}&lng=${lng}&maxResults=3&maxDistanceKM=-1`, this.config);

		return search.body;
	}
};
