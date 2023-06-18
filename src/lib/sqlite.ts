import { exec } from 'child_process';

export async function execSqlite(cmd: string) {
	const run = `sqlite yeet.db "${cmd}" ".exit"`;
	const promise = new Promise((r: (v: string) => void) => {
		exec(run, (e, o) => {
			if (e) {
				console.log(run);
				r(e.message + '; ECODE: ' + e.code);
			}
			r(o);
		});
	});
	const e = await promise;
	return e;
}
