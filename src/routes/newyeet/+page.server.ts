import { error } from '@sveltejs/kit';
import { exec } from 'child_process';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const number = data.get('id');
		if (number === null) {
			throw error(400, 'No id provided');
		}
		console.log(number);
		const cmd = `sqlite yeet.db  "insert into test values (${number})" ".exit"`;
		console.log(cmd);
		const promise = new Promise((r: (v: string) => void) => {
			exec(cmd, (e, o) => {
				if (e) {
					console.log(e);
					r(e.message + '; ECODE: ' + e.code);
				}
				console.log(o);
				r('');
			});
		});
		let e = await promise;
		e = e.substring(e.search('Error'), e.length);
		if (e !== '') {
			throw error(400, e);
		}
		console.log('redirecting');
		throw redirect(303, '/yeet');
	}
};
