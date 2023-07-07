import type { PageServerLoad } from './$types';
import { deleteElement, deleteLoad } from '$lib/controllers/delete';
import type { Cookies } from '@sveltejs/kit';


export const load = (async ({ params, cookies }) => {
    return await deleteLoad(params, cookies, "admins", ["email"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, cookies }: { params: { id: string }, cookies: Cookies }) => {
        await deleteElement(params, cookies, "admins");
    }
};
