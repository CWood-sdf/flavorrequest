import type { Cookies } from "@sveltejs/kit";
import { deleteLoad, type PageServerLoad } from "./delete";
import { assertAdmin } from "$lib/firebase/server";


export async function editLoad(params: { id: string }, cookies: Cookies, collection: string, properties: string[]): Promise<PageServerLoad> {
    return await deleteLoad(params, cookies, collection, properties);
};

export async function editElement(params: { id: string }, cookies: Cookies, collection: string) {
    await assertAdmin(cookies);

}