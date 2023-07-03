import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isAdmin, getEmail, firestore } from '$lib/firebase/server';

export const load = (async ({ cookies }) => {
    console.log(await getEmail(cookies));
    console.log("sdfsdf");
    if (!await isAdmin(await getEmail(cookies))) {
        throw error(404, "Not found");
    }

    return {

    }
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, cookies }) => {
        if (!await isAdmin(await getEmail(cookies))) {
            throw error(404, "Not found");
        }
        const body = await request.formData();
        const name = body.get("name");
        const description = body.get("description");
        if (typeof name !== "string" || name.length === 0) {
            throw error(400, "Missing a name");
        }
        if (typeof description !== "string" || description.length === 0) {
            throw error(400, "Missing a description");
        }

        // if (typeof newAdmin !== "string" || newAdmin.length === 0) {
        //     throw error(400, "Missing an email");
        // }
        // const updatedBy = await getEmail(cookies);
        const currentFlavors = await firestore.collection("flavors").get();
        const id = currentFlavors.docs.map((doc) => doc.get("id")).reduce((a, b) => Math.max(a, b), 0) + 1;
        // add the above to the database
        await firestore.collection("flavors").add({
            Name: name,
            Description: description,
            id: id
        });
        throw redirect(303, "/flavors");
    }
};