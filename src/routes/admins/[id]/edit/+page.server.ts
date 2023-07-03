import { assertAdmin, firestore, getEmail } from '$lib/firebase/server';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    assertAdmin(cookies);
    const cool = await firestore.collection("admins").where("id", "==", parseInt(params.id)).get();
    const snap = cool.docs.map((doc) => doc.data());
    const data = snap.map(v => {
        const updatedDate = v.updatedOn.toDate();
        return {
            id: v.id,
            email: v.email,
            updatedBy: v.updatedBy,
            updatedOn: `${updatedDate.getMonth() + 1}/${updatedDate.getDate()}/${updatedDate.getFullYear()}`
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