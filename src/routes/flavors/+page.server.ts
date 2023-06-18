import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { firestore } from '$lib/firebase/server';

export const load = (async () => {
    const cool = await firestore.collection("flavors").get();
    const snap = cool.docs.map((doc) => doc.data());
    return {
        props: {
            data: snap
        }
    }
}) satisfies PageServerLoad;

// /** @type {import('./$types').Actions} */
// export const actions = {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     default: async ({ request }: { request: Request }) => {
        
//         throw redirect(303, '/request');
//     }
// };