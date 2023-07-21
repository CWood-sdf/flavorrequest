import type { Cookies } from '@sveltejs/kit';
import { deleteLoad, type PageServerLoad } from '$lib/controllers/delete';

export async function viewLoad(params: { id: string }, cookies: Cookies, collection: string, properties: string[]): Promise<PageServerLoad> {
    return await deleteLoad(params, cookies, collection, properties);
}

