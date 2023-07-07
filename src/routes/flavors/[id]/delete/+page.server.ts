import type { PageServerLoad } from './$types';
import { deleteElement, deleteLoad, type DeleteParams } from '$lib/controllers/delete';

export const load = (async ({ params, cookies }) => {
    return await deleteLoad(params, cookies, "flavors", ["Name"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, cookies }: DeleteParams) => {
        await deleteElement(params, cookies, "flavors");
    }
};
