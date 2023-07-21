import type { PageServerLoad } from './$types';
import { getEmail, assertAdmin } from '$lib/firebase/server';
import { newElement, type SendParams } from '$lib/controllers/new';
import { error } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
	await assertAdmin(cookies);
	return {};
}) satisfies PageServerLoad;

export const actions = {
	send: async ({ request, cookies }: SendParams) => {
		const elementMaker = async (formData: FormData) => {
			const email = formData.get('email');
			if (typeof email !== 'string') {
				throw error(400, 'Missing an email');
			}
			const updatedBy = await getEmail(cookies);
			const updatedOn = new Date().toString();
			return {
				email: email,
				updatedBy: updatedBy,
				updatedOn: updatedOn
			};
		};
		await newElement(cookies, 'admins', request, elementMaker);
	}
};
