# Airly :cloud:

> Simple wrapper for [Airly API](https://developer.airly.eu/docs)

[![Build Status](https://travis-ci.org/xxczaki/airly.svg?branch=master)](https://travis-ci.org/xxczaki/airly) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo) 
[![Install size](https://packagephobia.now.sh/badge?p=airly)](https://packagephobia.now.sh/result?p=airly)

## Highlights

* Simple API
* Uses the 2.0 version of Airly API
* Includes only the most useful operations
* Only 1 dependency
* Less than 50 lines of code

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

### airly.nearestInstallations(lat, lng)

> Returns information about 3 nearest installations (including their ID's)

**lat**

Type: `number`

Latitude

**lng**

Type: `number`

Longitude

## License

MIT © [Antoni Kepinski](https://kepinski.me)
