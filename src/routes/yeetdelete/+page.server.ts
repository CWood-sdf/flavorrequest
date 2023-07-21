import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { execSqlite } from '$lib/sqlite';

async function getAllRowIds() {
	const e = await execSqlite('select id from test');
	if (e.includes('ECODE')) {
		throw error(400, e);
	}
	return e.split('\r\n').filter((v) => v !== '');
}

/** @type {import('./$types').Actions} */
export const actions = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	default: async ({ request }) => {
		const data = await request.formData();
		const rows = await getAllRowIds();
		const rowsToDelete: string[] = [];
		for (const row of rows) {
			if (data.get(row) === row) {
				rowsToDelete.push(row);
			}
		}
		if (rowsToDelete.length === 0) {
			throw redirect(303, '/yeet');
		}
		await execSqlite(
			`delete from test where id in (${rowsToDelete.join(', ')})`
		);
		throw redirect(303, '/yeet');
	}
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		data: await getAllRowIds()
	};
}
