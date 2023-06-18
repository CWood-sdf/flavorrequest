// import { error } from '@sveltejs/kit';
// import { exec } from "child_process";
import { execSqlite } from "$lib/sqlite";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data: string = await execSqlite('.read sql/scripts/thing.sql');
	// console.log(data);
	// const data = await new Promise((resolve) => {
	//     exec('sqlite -cmd ".read ../thing.sql"', (err, stderr, stdout) => {
	//         if (err) {
	//             throw error(500, err);
	//         }
	//         resolve(stdout);
	//     })
	// });
	// console.log(data);
	let arr = data.split('\r\n');
	arr = arr.filter((v) => v.length > 0);

	return {
		props: {
			data: arr.join(', ')
		}
	};
}
