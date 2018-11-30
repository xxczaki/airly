const Airly = require('..');

// Specify API key
const airly = new Airly('API_KEY');

(async () => {
	try {
		// Get data from installation number 240
		const data = await airly.idData(240);

		// Filter to only get info about current PM1, PM2.5 and PM1O values
		const info = data.current.values.filter(item => (
			item.name === 'PM1' || item.name === 'PM25' || item.name === 'PM10'
		));

		// Present data in a nice form
		const newInfo = info.map(el => ({...el, key: el.name}));

		console.log(newInfo);
	} catch (error) {
		console.log(error);
	}
})();
