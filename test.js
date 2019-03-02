import test from 'ava';
import Airly from '.';

const airly = new Airly('API_KEY');

test('validates installation id, when returning data', async t => {
	const error = await t.throwsAsync(async () => {
		await airly.idData('foo');
	});
	t.regex(error.message, /Expected `id` to be of type `number` but received type `string`/);
});

test('validates installation id, when returning info', async t => {
	const error = await t.throwsAsync(async () => {
		await airly.idData('bar');
	});
	t.regex(error.message, /Expected `id` to be of type `number` but received type `string`/);
});

test('validates coordinates', async t => {
	const error = await t.throwsAsync(async () => {
		await airly.nearestInstallations(91.0, 181.0);
	});
	t.regex(error.message, /Expected number `lat` `91` to pass custom validation function/);
});
