import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, request }) {
	const requestJson = await request.blob();
	console.log(requestJson);
	const auth_email: string | null = await request.headers.get(
		'Ngrok-Auth-User-Email'
	);
	console.log(auth_email);
	// if (auth_email == null) {
	//     throw error(404, 'Not found');
	// }
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '1');

	const d = max - min;

	if (isNaN(d) || d < 0) {
		throw error(
			400,
			'min and max must be numbers, and min must be less than max'
		);
	}

	const random = min + Math.random() * d;

	return new Response(String(random));
}
