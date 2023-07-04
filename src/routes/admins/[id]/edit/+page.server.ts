import { assertAdmin, firestore, getEmail } from '$lib/firebase/server';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { editLoad } from '$lib/controllers/edit';

export const load = (async ({ params, cookies }) => {
    return await editLoad(params, cookies, "admins", ["email"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, request, cookies }) => {
        assertAdmin(cookies);
        const body = await request.formData();
        const email = body.get("email");
        const updatedBy = await getEmail(cookies);
        const updatedOn = new Date();
        const data = await firestore.collection("admins").where("id", "==", parseInt(params.id)).get();
        data.docs.forEach(v => {
            v.ref.update({
                email,
                updatedBy,
                updatedOn
            });

        });
        throw redirect(303, `/admins`)
    }
}