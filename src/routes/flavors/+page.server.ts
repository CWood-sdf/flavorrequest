import { firestore, getEmail, isAdmin } from '$lib/firebase/server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async ({ cookies }) => {
    console.log(await getEmail(cookies));
    console.log("sdfsdf");
    if (!await isAdmin(await getEmail(cookies))) {
        throw error(404, "Not found");
    }

    const cool = await firestore.collection("flavors").get();
    const snap = cool.docs.map((doc) => doc.data());
    const data = snap.map(v => {
        console.log(v.name);
        return {
            id: v.id,
            name: v.Name,
            description: v.Description,
        }
    })
    return {
        data: data
    }
}) satisfies PageServerLoad;