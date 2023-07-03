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
    default: async ({ params, request, cookies }) => {
        assertAdmin(cookies);
        const body = await request.formData();
        const name = body.get("name");
        const description = body.get("description");
        if (!name || !description) {
            throw error(400, "Bad request");
        }
        const data = await firestore.collection("flavors").where("id", "==", parseInt(params.id)).get();
        data.docs.forEach(v => {
            v.ref.update({
                Name: name,
                Description: description
            });

        });
        throw redirect(303, `/flavors`)
    }
}