import test from 'ava';
import Airly from '../source';

const airly = new Airly('API_KEY');

test('validation', async t => {
	const error = await t.throwsAsync(async () => {
		await airly.nearestInstallations(91.0, 181.0);
	});
	t.regex(error.message, /Expected number `91` to pass custom validation function/);
});
