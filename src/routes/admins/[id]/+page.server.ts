import { assertAdmin, firestore } from '$lib/firebase/server';
import { error } from '@sveltejs/kit';
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
