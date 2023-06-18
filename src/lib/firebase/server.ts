// src/lib/firebase/admin.ts
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import keys from "../../../apikeys.json";
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
        databaseURL: `https://flavors-53832-default-rtdb.firebaseio.com/`,
    });
}
export const firebase = makeApp();
export const auth = getAuth(firebase);
export const db = getDatabase(firebase);
export const firestore = getFirestore(firebase);