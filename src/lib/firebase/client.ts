// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import {
    PUBLIC_FIREBASE_PROJECT_ID,
    PUBLIC_FIREBASE_API_KEY,
    PUBLIC_FIREBASE_AUTH_DOMAIN,
    PUBLIC_FIREBASE_STORAGE_BUCKET,
    PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    PUBLIC_FIREBASE_APP_ID,
} from "$env/static/public";

// const { initializeApp, applicationDefault, cert } = require('firebase/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function makeApp() {
    const apps = getApps();
    if (apps.length > 0) {
        return apps[0];
    }

    return initializeApp({
        apiKey: PUBLIC_FIREBASE_API_KEY,
        authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
        appId: PUBLIC_FIREBASE_APP_ID,
        databaseURL: `https://flavors-53832-default-rtdb.firebaseio.com/`,
    });
}

export const firebase = makeApp();
export const auth = getAuth(firebase);
// export const analytics = getAnalytics(app);
export const db = getDatabase(firebase);

export const provider = new GoogleAuthProvider();