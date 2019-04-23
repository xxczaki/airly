'use strict';

import got from 'got';
import ow from 'ow';

class Airly {
	/**
	* @param {string} key    API key - Special access key from Airly
	* @param {string} language    Language - Get air quality descriptions in specified language. Currently supported languages are English ('en' - default) and Polish ('pl')
	*/
	public readonly baseUrl: string

	public readonly config: object

	constructor(public key: string, public language? : string) {
		// Validate key & language
		ow(key, ow.string);
		ow(language, ow.optional.string.minLength(2).maxLength(2));

		this.baseUrl = 'https://airapi.airly.eu/v2';
		this.config = {
			headers: {
				apikey: key,
				'Accept-Language': language
			},
			json: true
		};
	}

	/**
	* @param {number} id   Installation ID - Unique number of the installation
	* @returns {Promise<object[]>} Data from the installation
	*/
	async idData(id: number): Promise<string> {
		// Validate id
		ow(id, ow.number);

		const response = await got(`${this.baseUrl}/measurements/installation?installationId=${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} id   Installation ID - Unique number of the installation
	* @returns {Promise<object[]>} Info about installation
	*/
	async idInfo(id: number): Promise<string> {
		// Validate id
		ow(id, ow.number);

		const response = await got(`${this.baseUrl}/installations/${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} lat  	Latitude - Geographical coordinate
	* @param {number} lng   Longitude - Geographical coordinate
	* @returns {Promise<object[]>} Info about 3 nearest installations
	*/
	async nearestInstallations(lat: number, lng: number): Promise<string> {
		/*
		Validate latitude & longitude
		See https://developer.airly.eu/docs#general.coordinates
		*/
		ow(lat, ow.number.is(x => x >= -90.0 && x <= 90.0));
		ow(lng, ow.number.is(x => x >= -180.0 && x <= 180.0));

		const search = await got(`${this.baseUrl}/installations/nearest?lat=${lat}&lng=${lng}&maxResults=3&maxDistanceKM=-1`, this.config);
		return search.body;
	}
}

module.exports = Airly;
export default Airly;
