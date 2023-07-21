// src/routes/+layout.server.ts
import { auth } from '$lib/firebase/server';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoadEvent } from './$types';
export const ssr = true;

export async function load({ cookies, url }: LayoutServerLoadEvent) {
    if (url.pathname === '/loginWithGoogle') {
        return;
    }
    try {
        const token = cookies.get('token');
        const user = token ? await auth.verifyIdToken(token) : null;
        if (!user) {
            //throw redirect(307, "/loginWithGoogle");
        }
        return {
            uid: user?.uid,
            email: user?.email
        };
    } catch {
        // The token is set but invalid or expired
        cookies.set('token', '', { maxAge: -1 });
        throw redirect(307, '/');
    }
}
