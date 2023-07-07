import { firestore, getEmail, isAdmin } from '$lib/firebase/server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async ({ cookies }) => {
    console.log(await getEmail(cookies));
    console.log("sdfsdf");
    if (!await isAdmin(await getEmail(cookies))) {
        throw error(404, "Not found");
    }

    const cool = await firestore.collection("admins").get();
    const snap = cool.docs.map((doc) => doc.data());
    const data = snap.map(v => {
        return {
            email: v.email, updatedBy: v.updatedBy, updatedOn: v.updatedOn + "", id: v.id
        }
    })
    return {
        data
    }
}) satisfies PageServerLoad;