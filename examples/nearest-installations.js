const Airly = require('../dist');

// Specify API key
const airly = new Airly('API_KEY');

(async () => {
	try {
		// Get information about 3 nearest installations
		const data = await airly.nearestInstallations(50.184018, 19.791425);

		// Get the same data from each 3 installations
		const id = data.map(v => v.id);
		const street = data.map(v => v.address.street);
		const city = data.map(v => v.address.city);

		// Display information in a nice way :)
		console.log([
			{id: id[0], address: {street: street[0], city: city[0]}},
			{id: id[1], address: {street: street[1], city: city[1]}},
			{id: id[2], address: {street: street[2], city: city[2]}}
		]);
	} catch (error) {
		console.log(error);
	}
})();
