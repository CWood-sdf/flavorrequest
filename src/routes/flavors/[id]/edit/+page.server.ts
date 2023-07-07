import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { editLoad, type SendParams, editElement } from '$lib/controllers/edit';

export const load = (async ({ params, cookies }) => {
    return await editLoad(params, cookies, "flavors", ["Name", "Description"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, request, cookies }: SendParams) => {
        try {
            await editElement(params, cookies, "flavors", request, async (formData) => {
                const name = formData.get("name")?.toString();
                const description = formData.get("description")?.toString();
                if (name === undefined || description === undefined) {
                    throw new Error("Name or description is undefined");
                }
                return {
                    Name: name,
                    Description: description
                };
            });
        } catch (e) {
            console.log(e);
            throw error(500, "Error updating flavor");
        }
        throw redirect(303, `/flavors`);
    }
}
