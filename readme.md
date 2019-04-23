# Airly :cloud:

> Simple wrapper for [Airly API](https://developer.airly.eu/docs)

[![Build Status](https://travis-ci.org/xxczaki/airly.svg?branch=master)](https://travis-ci.org/xxczaki/airly) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo) 
[![Install size](https://packagephobia.now.sh/badge?p=airly)](https://packagephobia.now.sh/result?p=airly)

[**Czytaj po polsku :poland:**](https://github.com/xxczaki/airly/blob/master/readme_pl.md)

## Highlights

* Simple API
* Uses async/await
* Uses the 2.0 version of Airly API
* Actively maintained
* Lightweight
* Single source file (containing ~120 lines of code)
* Written in TypeScript

## Install

```
$ npm install airly
```

<a href="https://www.patreon.com/akepinski">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>


## Usage

```js
const Airly = require('airly');

const airly = new Airly('API_KEY');

(async () => {
	try {
		const data = await airly.idInfo(240);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
})();
```


## API

> Check out the [`examples`](https://github.com/xxczaki/airly/tree/master/examples) folder :rocket:

### new Airly(key, language)

> Constructor for other operations

**key**

Type: `string`

Your Airly API key. You can obtain one [here](https://developer.airly.eu/).

**language**

Type: `string`
Default: `en`

Get air quality descriptions in specified language. Currently supported languages are English ('en' - default) and Polish ('pl').

For more information check out [Airly's documentation](https://developer.airly.eu/docs#general.language)

### airly.idData(id)

> Returns pollution data from the specified installation

**id**

Type: `number`

Unique number of the installation

### airly.idInfo(id)

> Returns information about the specified installation

**id**

Type: `number`

Unique number of the installation

### airly.nearestInstallations(lat, lng, maxDistanceKM, maxResults)

> Returns information about 3 nearest installations (including their ID's)

**lat**

Type: `number`

Latitude

**lng**

Type: `number`

**maxDistanceKM**

Type: `number`
Default: 3

All the returned installations must be located within this limit from the given point (in km); negative value means no limit.

**maxResults**

Type: `number`
Default: -1

Maximum number of installations to return; negative value means no limit.

### airly.nearestIdMeasurements(lat, lng, maxDistanceKM)

> Returns measurements for an installation closest to a given location.

**lat**

Type: `number`

Latitude

**lng**

Type: `number`

Longitude

**maxDistanceKM**

Type: `number`
Default: 3

All the returned installations must be located within this limit from the given point (in km); negative value means no limit.

### airly.nearestAverageMeasurements(lat, lng)

> Returns measurements for any geographical location. Measurement values are interpolated by averaging measurements from nearby sensors (up to 1,5km away from the given point)

**lat**

Type: `number`

Latitude

**lng**

Type: `number`

Longitude

## License

MIT © [Antoni Kepinski](https://kepinski.me)
