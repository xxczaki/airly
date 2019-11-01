'use strict';

import fetch from 'node-fetch';

interface AirlyConfig {
	headers: {
		apikey: string;
		'Accept-Language'?: 'en' | 'pl';
	};
}

class Airly {
	/**
	* @param {string} key API key - Special access key from Airly
	* @param {string} [language='en'] Language - Get air quality descriptions in specified language. Currently supported languages are English ('en' - default) and Polish ('pl')
	*/
	public readonly baseUrl: string;

	public readonly config: AirlyConfig;

	constructor(public readonly key: string, public language?: 'en' | 'pl') {
		this.baseUrl = 'https://airapi.airly.eu/v2';
		this.config = {
			headers: {
				apikey: key,
				'Accept-Language': language
			}
		};
	}

	/**
	* @param {number} lat Latitude - Geographical coordinate
	* @param {number} lng Longitude - Geographical coordinate
	* @param {number} [maxDistanceKM=3] All the returned installations must be located within this limit from the given point (in km); negative value means no limit
	* @param {number} [maxResults=-1] Maximum number of installations to return; negative value means no limit
	* @returns {Promise<object[]>} List of installations given by location point, ordered by distance to that point
	*/
	async nearestInstallations(lat: number, lng: number, maxDistanceKM = 3, maxResults = -1): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/installations/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=${maxDistanceKM}&maxResults=${maxResults}`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @param {number} id Installation ID - Unique number of the installation
	* @returns {Promise<object[]>} Information about specified installation
	*/
	async installationInfo(id: number): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/installations/${id}`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @param {number} id Installation ID - Unique number of the installation
	* @returns {Promise<object[]>} Detailed measurements (current, historical and future) for an installation
	*/
	async installationMeasurements(id: number): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/measurements/installation?installationId=${id}`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @param {number} lat Latitude - Geographical coordinate
	* @param {number} lng Longitude - Geographical coordinate
	* @param {number} [maxDistanceKM=3] All the returned installations must be located within this limit from the given point (in km); negative value means no limit
	* @returns {Promise<object[]>} Detailed measurements (current, historical and future) from the installation which is closest to a given point
	*/
	async nearestMeasurements(lat: number, lng: number, maxDistanceKM = 3): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/measurements/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=${maxDistanceKM}`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @param {number} lat Latitude - Geographical coordinate
	* @param {number} lng Longitude - Geographical coordinate
	* @returns {Promise<object[]>} Detailed measurements (current, historical and future) for a map point, which can be interpolated from nearby installations
	*/
	async pointMeasurements(lat: number, lng: number): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/measurements/point?lat=${lat}&lng=${lng}`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @returns {Promise<object[]>} List of IndexTypes supported by the platform
	*/
	async metaIndexes(): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/meta/indexes`, this.config).then((res: any) => res.json());
		return response;
	}

	/**
	* @returns {Promise<object[]>} List of MeasurementTypes supported by the platform
	*/
	async metaMeasurements(): Promise<string> {
		// @ts-ignore
		const response = await fetch(`${this.baseUrl}/meta/measurements`, this.config).then((res: any) => res.json());
		return response;
	}
}

export default Airly;
