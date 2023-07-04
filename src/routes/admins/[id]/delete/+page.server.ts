import type { PageServerLoad } from './$types';
import { deleteElement, deleteLoad } from '$lib/controllers/delete';


export const load = (async ({ params, cookies }) => {
    return await deleteLoad(params, cookies, "admins", ["email"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, cookies }) => {
        await deleteElement(params, cookies, "admins");
    }
};