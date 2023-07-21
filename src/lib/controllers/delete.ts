import { assertAdmin, firestore } from '$lib/firebase/server';
import { error, redirect, type Cookies } from '@sveltejs/kit';

export interface PageServerLoad {
	data: {
		id: string;
		[key: string]: string;
	};
	pageId: string;
}
export interface DeleteParams {
	params: { id: string };
	cookies: Cookies;
}
export async function deleteLoad(
	params: { id: string },
	cookies: Cookies,
	collection: string,
	properties: string[]
): Promise<PageServerLoad> {
	await assertAdmin(cookies);
	const cool = await firestore
		.collection(collection)
		.where('id', '==', parseInt(params.id))
		.get();
	const snap = cool.docs.map((doc) => doc.data());
	const data = snap.map((v) => {
		const ret: { [key: string]: string; id: string } = { id: '' };
		properties.forEach((prop) => {
			const otherProp: string = prop[0].toLowerCase() + prop.slice(1);
			ret[otherProp] = v[prop];
		});
		ret['id'] = v['id'];
		return ret;
	});
	if (data.length == 0 || data.length > 1) {
		throw error(404, 'Not found');
	}

	return {
		data: data[0],
		pageId: params.id
	};
}

export async function deleteElement(
	params: { id: string },
	cookies: Cookies,
	collection: string
) {
	const id = parseInt(params.id);
	await assertAdmin(cookies);
	//delete the admin
	const data = await firestore
		.collection(collection)
		.where('id', '==', id)
		.get();
	//delete the admin
	data.docs.forEach(async (doc) => {
		console.log('deleting ', doc.id);
		await doc.ref.delete();
	});
	throw redirect(303, `/${collection}`);
}
