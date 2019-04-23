# Airly :cloud:

> Pobieraj dane z [Airly API](https://developer.airly.eu/docs) wygodnie

[![Build Status](https://travis-ci.org/xxczaki/airly.svg?branch=master)](https://travis-ci.org/xxczaki/airly) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo) 
[![Install size](https://packagephobia.now.sh/badge?p=airly)](https://packagephobia.now.sh/result?p=airly)

> [**Czytaj po angielsku 🇺🇸**](https://github.com/xxczaki/airly/blob/master/README.md)

## Cechy

* Proste API
* Korzysta z async/await
* Używa najnowszej wersji 2.0 API
* Aktywnie wspierana
* Lekka
* Mniej niż 100 linijek kodu
* Napisana w Języku TypeScript

## Instalacja

```
$ npm install airly
```

<a href="https://www.patreon.com/akepinski">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>


## Przykład użycia

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

> Zapoznaj się z folderem [`examples`](https://github.com/xxczaki/airly/tree/master/examples) :rocket:

### new Airly(key, language)

> Konstruktor pozwalający na korzystanie z innych operacji

**key**

Typ: `string`

Twój klucz dostępu do API. Możesz go wygenerować [tutaj](https://developer.airly.eu/).

**language**

Typ: `string`
Domyślnie: `en`

Otrzymuj opisy zanieczyszczenia w wybranym języku. Obecnie wspierane języki to Angielski ('en' - domyślnie) i Polski ('pl').

Po więcej informacji zapoznaj się z [dokumentacją Airly](https://developer.airly.eu/docs#general.language)

### airly.idData(id)

> Pozwala na pozyskanie danych z określonej instalacji

**id**

Type: `number`

Unikalny numer instalacji

### airly.idInfo(id)

> Pozwala na pozyskanie informacji o określonej instalacji

**id**

Type: `number`

Unikalny numer instalacji

### airly.nearestInstallations(lat, lng)

> Pozwala na pozyskanie informacji o 3 najbliższych instalacjach w okolicy (w tym również ich numerów ID)

**lat**

Type: `number`

Szerokość geograficzna

**lng**

Type: `number`

Długość geograficzna

## Licencja

MIT © [Antoni Kepinski](https://kepinski.me)
