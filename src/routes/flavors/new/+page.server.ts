import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { assertAdmin } from '$lib/firebase/server';
import { newElement, type SendParams } from '$lib/controllers/new';

export const load = (async ({ cookies }) => {
    await assertAdmin(cookies);
    return {

    }
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ request, cookies }: SendParams) => {
        const elementMaker = async (formData: FormData) => {
            const name = formData.get("name");
            const description = formData.get("description");
            if (typeof name !== "string" || name.length === 0) {
                throw error(400, "Missing a name");
            }
            if (typeof description !== "string" || description.length === 0) {
                throw error(400, "Missing a description");
            }
            return {
                Name: name,
                Description: description,
            };
        };
        await newElement(cookies, "flavors", request, elementMaker);
    }
};
