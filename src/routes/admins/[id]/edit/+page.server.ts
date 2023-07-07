import { getEmail } from '$lib/firebase/server';
import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { editLoad, editElement, type SendParams } from '$lib/controllers/edit';

export const load = (async ({ params, cookies }) => {
    return await editLoad(params, cookies, "admins", ["email"]);
}) satisfies PageServerLoad;

export const actions = {
    send: async ({ params, request, cookies }: SendParams) => {
        try {
            await editElement(params, cookies, "admins", request, async (formData) => {
                const email = formData.get("email")?.toString();
                if (email === undefined) {
                    throw new Error("Email is undefined");
                }
                const updatedBy = await getEmail(cookies);
                const updatedOn = new Date().toString();
                console.log(email, updatedBy, updatedOn);
                return {
                    email,
                    updatedBy,
                    updatedOn
                };
            });
        } catch (e) {
            console.log(e);
            throw error(500, "Error updating admin");
        }
        throw redirect(303, `/admins`)
    }
}
