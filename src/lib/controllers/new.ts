import { type Cookies, redirect } from "@sveltejs/kit";
import { assertAdmin, firestore } from '$lib/firebase/server';

import type * as edit from '$lib/controllers/edit';

export type SendParams = edit.SendParams;
export async function newLoad(cookies: Cookies): Promise<Record<string, never>> {
    await assertAdmin(cookies);

    return {

    };
};
export async function newElement(
    cookies: Cookies, collection: string, request: Request, element: (formData: FormData) => Promise<edit.Element>)
    : Promise<void> {
    await assertAdmin(cookies);

    const body = await request.formData();

    const data = await element(body);

    const currentCollection = await firestore.collection(collection).get();

    const ids = currentCollection.docs.map((doc) => doc.data().id);

    const id = ids.reduce((a: number, b: number) => Math.max(a, b), 0) + 1;

    data.id = id;

    await firestore.collection(collection).add(data);

    throw redirect(303, `/${collection}`);
}
