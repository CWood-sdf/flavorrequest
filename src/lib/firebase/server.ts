// src/lib/firebase/admin.ts
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import keys from '../../../apikeys.json';
import { redirect, type Cookies, error } from '@sveltejs/kit';
// import {
//     FIREBASE_ADMIN_PRIVATE_KEY,
//     FIREBASE_ADMIN_CLIENT_EMAIL,
// } from "$env/static/private";
// import { PUBLIC_FIREBASE_PROJECT_ID } from "$env/static/public";

function makeApp() {
    const apps = getApps();
    if (apps.length > 0) {
        return apps[0];
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return initializeApp({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        credential: cert(keys),
        databaseURL: `https://flavors-53832-default-rtdb.firebaseio.com/`
    });
}
export const firebase = makeApp();
export const auth = getAuth(firebase);
export const db = getDatabase(firebase);
export const firestore = getFirestore(firebase);

export async function isAdmin(userEmail: string): Promise<boolean> {
    // get the admins document
    // check if the user's email is in the admins document
    // return true if it is, false if it isn't
    const admins = await firestore.collection('admins').get();
    for (const doc of admins.docs) {
        if (doc.get('email') === userEmail) {
            return true;
        }
    }
    return false;
}

export async function getEmail(cookies: Cookies): Promise<string> {
    try {
        const token = cookies.get('token');
        const user = token ? await auth.verifyIdToken(token) : null;
        return user?.email ?? '';
    } catch (e) {
        cookies.set('token', '', { maxAge: -1 });
        throw redirect(307, '/');
    }
}
export async function assertAdmin(cookies: Cookies): Promise<void> {
    if (!(await isAdmin(await getEmail(cookies)))) {
        throw error(404, 'Not found');
    }
}
