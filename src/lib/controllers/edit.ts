import type { Cookies } from "@sveltejs/kit";
import { deleteLoad, type PageServerLoad } from "$lib/controllers/delete";
import { assertAdmin, firestore } from "$lib/firebase/server";

export interface Element {
    [key: string]: string;
};

export interface SendParams {
    params: { id: string };
    request: Request;
    cookies: Cookies;
};


export async function editLoad(params: { id: string }, cookies: Cookies, collection: string, properties: string[]): Promise<PageServerLoad> {
    return await deleteLoad(params, cookies, collection, properties);
};

export async function editElement(
    params: { id: string }, cookies: Cookies, collection: string, request: Request, element: (formData: FormData) => Promise<Element>): Promise<void> {

    const id: number = parseInt(params.id);

    await assertAdmin(cookies);

    const body = await request.formData();

    const data = await element(body);

    const store = await firestore.collection(collection).where("id", "==", id).get();

    store.docs.forEach(async (doc) => {
        await doc.ref.update(data);
    });

}
