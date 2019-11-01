# Airly :cloud:

> Pobieraj dane z [Airly API](https://developer.airly.eu/docs) wygodnie

[![Build Status](https://travis-ci.org/xxczaki/airly.svg?branch=master)](https://travis-ci.org/xxczaki/airly) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo) 
[![Install size](https://packagephobia.now.sh/badge?p=airly)](https://packagephobia.now.sh/result?p=airly)

> [**Czytaj po angielsku 🇺🇸**](https://github.com/xxczaki/airly/blob/master/readme.md)

## Cechy

* Proste, asynchroniczne API
* Działa zarówno w środowisku Node.js, jak i w przeglądarce
* Używa najnowszej wersji 2.0 API
* Pełne pokrycie API
* Aktywnie wspierana
* Lekka
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
		const data = await airly.installationInfo(240);
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

### airly.installationMeasurements(id)

> Zwraca szczegółowe pomiary (obecne, historyczne i przewidywane) dla instalacji

**id**

Typ: `number`

Unikalny numer instalacji

### airly.installationInfo(id)

> Zwraca informacje na temat wskazanej instalacji

**id**

Typ: `number`

Unikalny numer instalacji

### airly.nearestInstallations(lat, lng, maxDistanceKM, maxResults)

> Zwraca informacje na temat najbliższych instalacji (razem z ich numerami)

**lat**

Typ: `number`

Szerokość geograficzna

**lng**

Type: `number`

Długość geograficzna

**maxDistanceKM**

Typ: `number`

Domyślnie: 3

Wszystkie zwracane instalacje muszą znajdować się w danej odległości (w km) od wskazanego punktu; negatywna wartość oznacza brak limitu

**maxResults**

Typ: `number`

Domyślnie: -1

Maksymalna liczba instalacji, która może zostać zwrócona; negatywna wartość oznacza brak limitu

### airly.nearestMeasurements(lat, lng, maxDistanceKM)

> Zwraca szczegółowe pomiary (obecne, historyczne i przewidywane) z instalacji, która jest najbliżej od podanego punktu

**lat**

Typ: `number`

Szerokość geograficzna

**lng**

Typ: `number`

Długość geograficzna

**maxDistanceKM**

Typ: `number`

Domyślnie: 3

Wszystkie zwracane instalacje muszą znajdować się w danej odległości (w km) od wskazanego punktu; negatywna wartość oznacza brak limitu

### airly.pointMeasurements(lat, lng)

> Zwraca szczegółowe pomiary (obecne, historyczne i przewidywane) dla punktu na mapie, które mogą być interpolowane z najbliższych instalacji

**lat**

Type: `number`

Szerokość geograficzna

**lng**

Type: `number`

Długość geograficzna

### airly.metaIndexes()

> Zwraca listę IndexTypes wspieranych przez platformę

### airly.metaMeasurements()

> Zwraca listę MeasurementTypes wspieranych przez platformę

## Licencja

MIT © [Antoni Kepinski](https://kepinski.me)
