import test from 'ava';
import Airly from '../source';

const airly = new Airly('API_KEY');

test('invalid api key', async t => {
	const error = await t.throwsAsync(async () => {
		await airly.nearestInstallations(90.0, 180.0);
	});
	t.regex(error.message, /code/);
});
