const Airly = require('../dist');

// Specify API key
const airly = new Airly('API_KEY');

(async () => {
	try {
        const data = await airly.nearestAverageMeasurements(50.184018, 19.791425);

		console.log(data.current.values);
	} catch (error) {
		console.log(error);
	}
})();