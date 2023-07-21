import { firestore } from '$lib/firebase/server';
// import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const cool = await firestore.collection('requests').get();
	const snap = cool.docs.map((doc) => doc.data().flavor);
	const data = snap
		.filter((value, index, self) => self.indexOf(value) === index)
		.map((v) => {
			return {
				count: snap.filter((v2) => v2 === v).length,
				flavor: v
			};
		});
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
			data: data
		}
	};
}
