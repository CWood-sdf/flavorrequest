import type { PageServerLoad } from './$types';
import { deleteLoad } from '$lib/controllers/delete';

export const load = (async ({ params, cookies }) => {
    const snap = await deleteLoad(params, cookies, "admins", ["email", "updatedBy", "updatedOn"]);

    const updatedDate = new Date(snap.data.updatedOn);
    const updatedOn = `${updatedDate.getMonth() + 1
        }/${updatedDate.getDate()}/${updatedDate.getFullYear()}`;
    snap.data.updatedOn = updatedOn;

    return snap;
}) satisfies PageServerLoad;
