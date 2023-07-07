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
    send: async ({ request, cookies }) => {
        if (!await isAdmin(await getEmail(cookies))) {
            throw error(404, "Not found");
        }
        const body = await request.formData();
        const newAdmin = body.get("email");
        if (typeof newAdmin !== "string" || newAdmin.length === 0) {
            throw error(400, "Missing an email");
        }
        const updatedBy = await getEmail(cookies);
        const currentAdmins = await firestore.collection("admins").get();
        const id = currentAdmins.docs.map((doc) => doc.get("id")).reduce((a, b) => Math.max(a, b), 0) + 1;
        // add the above to the database
        await firestore.collection("admins").add({
            email: newAdmin,
            updatedBy: updatedBy,
            updatedOn: new Date(),
            id: id
        });
        throw redirect(303, "/admins");
    }
};