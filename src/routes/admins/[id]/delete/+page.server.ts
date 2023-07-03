import { firestore, getEmail, isAdmin } from '$lib/firebase/server';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    if (!await isAdmin(await getEmail(cookies))) {
        throw error(404, "Not found");
    }
    const cool = await firestore.collection("admins").where("id", "==", parseInt(params.id)).get();
    const snap = cool.docs.map((doc) => doc.data());
    const data = snap.map(v => {
        return {
            id: v.id,
            email: v.email
        }
    });
    if (data.length == 0 || data.length > 1) {
        throw error(404, "Not found");
    }

    return {
        data: data[0]
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ params, cookies }) => {
        const id = parseInt(params.id);
        if (!await isAdmin(await getEmail(cookies))) {
            throw error(404, "Not found");
        }
        console.log("delete admin", id)
        //delete the admin
        const data = await firestore.collection("admins").where("id", "==", id).get();
        //delete the admin
        data.docs.forEach(async (doc) => {
            console.log("deleting ", doc.id)
            await doc.ref.delete();
        });
        throw redirect(303, "/admins");
    }
};