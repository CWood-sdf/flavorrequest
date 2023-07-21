import { auth, firestore, getEmail } from '$lib/firebase/server';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { LayoutServerLoadEvent } from '../../$types.js';

export const load = async function ({ cookies }: LayoutServerLoadEvent) {
	const cool = await firestore.collection('flavors').get();
	const snap = cool.docs.map((doc) => doc.data());
	// const snap = await db.ref("test").get();
	//     .then((snapshot) => {
	//     if (snapshot.exists()) {
	//         snap = snapshot.val() + "sdf";
	//         console.log(snapshot.val());
	//     }
	//     else {
	//         snap = "f";
	//         console.log("No data available");
	//     }
	// }).catch((error) => {
	//     snap = "F";
	//     console.error(error);
	// });
	// const snap = await done;
	return {
		props: {
			data: snap
		}
	};
} satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const useEmail = data.get('use-email') ?? false;

		let flavor: string = data.get('flavor')?.toString() ?? '';
		flavor = flavor.replace(/\(.*/g, '').trim();
		const date = new Date();
		const mmddyyyy = `${
			date.getMonth() + 1
		}/${date.getDate()}/${date.getFullYear()}`;
		// im fairly sure that "$?" will never be a valid email address
		const email = useEmail ? await getEmail(cookies) : '$?';
		// check if request already exists
		const exists = await firestore
			.collection('requests')
			.where('flavor', '==', flavor)
			.where('email', '==', email)
			.get();
		console.log(exists.empty);
		if (!exists.empty) {
			throw error(400, {
				message: `Exists already:${exists.docs.at(0)?.get('date')}`
			});
		}
		await firestore.collection('requests').add({
			flavor: flavor,
			email: useEmail ? email : '',
			date: mmddyyyy
		});
		throw redirect(303, '/request/new');
	}
};
