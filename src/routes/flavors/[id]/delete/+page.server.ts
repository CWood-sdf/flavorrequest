import { assertAdmin, firestore } from '$lib/firebase/server';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    assertAdmin(cookies);
    const cool = await firestore.collection("flavors").where("id", "==", parseInt(params.id)).get();
    const snap = cool.docs.map((doc) => doc.data());
    const data = snap.map(v => {
        return {
            id: v.id,
            name: v.Name,
            description: v.Description,
        }
    });
    if (data.length == 0 || data.length > 1) {
        throw error(404, "Not found");
    }

    return {
        data: data[0],
        pageId: params.id
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ params, cookies }) => {
        const id = parseInt(params.id);
        assertAdmin(cookies);
        //delete the admin
        const data = await firestore.collection("flavors").where("id", "==", id).get();
        //delete the admin
        data.docs.forEach(async (doc) => {
            console.log("deleting ", doc.id)
            await doc.ref.delete();
        });
        throw redirect(303, "/flavors");
    }
};