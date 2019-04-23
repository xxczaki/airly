'use strict';

import got from 'got';
import ow from 'ow';

interface AirlyConfig {
	headers: {
		apikey: string;
		'Accept-Language'?: 'en' | 'pl';
	};
	json: boolean;
}

class Airly {
	/**
	* @param {string} key    API key - Special access key from Airly
	* @param {string} language    Language - Get air quality descriptions in specified language. Currently supported languages are English ('en' - default) and Polish ('pl')
	*/
	public readonly baseUrl: string

	public readonly config: AirlyConfig

	constructor(public key: string, public language?: 'en' | 'pl') {
		// Validate key & language
		ow(key, ow.string);

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
		const response = await got(`${this.baseUrl}/measurements/installation?installationId=${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} id   Installation ID - Unique number of the installation
	* @returns {Promise<object[]>} Info about installation
	*/
	async idInfo(id: number): Promise<string> {
		const response = await got(`${this.baseUrl}/installations/${id}`, this.config);
		return response.body;
	}

	/**
	* @param {number} lat  	Latitude - Geographical coordinate
	* @param {number} lng   Longitude - Geographical coordinate
	* @param {number} maxDistanceKM  All the returned installations must be located within this limit from the given point (in km); negative value means no limit (default: 3)
	* @param {number} maxResults   Maximum number of installations to return; negative value means no limit (default: -1)
	* @returns {Promise<object[]>} Info about 3 nearest installations
	*/
	async nearestInstallations(lat: number, lng: number, maxDistanceKM?: number, maxResults?: number): Promise<string> {
		/*
		Validate latitude & longitude
		See https://developer.airly.eu/docs#general.coordinates
		*/
		ow(lat, ow.number.is(x => x >= -90.0 && x <= 90.0));
		ow(lng, ow.number.is(x => x >= -180.0 && x <= 180.0));

		const response = await got(`${this.baseUrl}/installations/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=${maxDistanceKM || 3}&maxResults=${maxResults || -1}`, this.config);
		return response.body;
	}

	/**
	* @param {number} lat  	Latitude - Geographical coordinate
	* @param {number} lng   Longitude - Geographical coordinate
	* @param {number} maxDistanceKM  All the returned installations must be located within this limit from the given point (in km); negative value means no limit (default: 3)
	* @returns {Promise<object[]>} Returns measurements for an installation closest to a given location.
	*/
	async nearestIdMeasurements(lat: number, lng: number, maxDistanceKM?: number): Promise<string> {
		/*
		Validate latitude & longitude
		See https://developer.airly.eu/docs#general.coordinates
		*/
		ow(lat, ow.number.is(x => x >= -90.0 && x <= 90.0));
		ow(lng, ow.number.is(x => x >= -180.0 && x <= 180.0));

		const response = await got(`${this.baseUrl}/measurements/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=${maxDistanceKM || 3}`, this.config);
		return response.body;
	}

	/**
	* @param {number} lat  	Latitude - Geographical coordinate
	* @param {number} lng   Longitude - Geographical coordinate
	* @returns {Promise<object[]>} Returns measurements for any geographical location. Measurement values are interpolated by averaging measurements from nearby sensors (up to 1,5km away from the given point).
	*/
	async nearestAverageMeasurements(lat: number, lng: number): Promise<string> {
		/*
		Validate latitude & longitude
		See https://developer.airly.eu/docs#general.coordinates
		*/
		ow(lat, ow.number.is(x => x >= -90.0 && x <= 90.0));
		ow(lng, ow.number.is(x => x >= -180.0 && x <= 180.0));

		const response = await got(`${this.baseUrl}/measurements/point?lat=${lat}&lng=${lng}`, this.config);
		return response.body;
	}
}

module.exports = Airly;
export default Airly;
