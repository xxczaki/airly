const Airly = require('../dist');

// Specify API key
const airly = new Airly('API_KEY');

(async () => {
	try {
		// Get info about the installation number 245
		const data = await airly.installationInfo(245);

		// Use the obtained data to fill this sentence
		console.log(`This installation is located at ${data.address.street} Street in ${data.address.city}!`);
	} catch (error) {
		console.log(error);
	}
})();
