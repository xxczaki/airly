const Airly = require('../dist');

// Specify API key and language
const airly = new Airly('API_KEY', 'pl');

(async () => {
	try {
        const data = await airly.nearestIdMeasurements(50.184018, 19.791425, 15);

		console.log(data.current.indexes);
	} catch (error) {
		console.log(error);
	}
})();