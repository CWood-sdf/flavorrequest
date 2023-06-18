// import { test as baseTest } from '@playwright/test';
// // import fs from 'fs';
// import auth from './.auth/user.json';

// export { expect } from '@playwright/test';
// export const test = baseTest.extend({
//     page: async ({ page }, use) => {
//         console.log("Waiting for auth page");
//         await page.waitForURL(/^https:\/\/accounts\.google\.com\/v3\/signin\/identifier*$/);
//         console.log("filling username");
//         await page.getByLabel('Email or phone').fill(auth.username);
//         console.log("clicking next");
//         await page.getByText('Next').click();
//         console.log("waiting for password page");
//         await page.waitForURL(/^https:\/\/accounts\.google\.com\/v3\/signin\/challenge*$/);
//         console.log("filling password");
//         await page.getByLabel('Enter your password').fill(auth.password);
//         console.log("clicking next");
//         await page.getByText('Next').click();
//         console.log("waiting for redirect");
//         // Wait until the page receives the cookies.
//         //
//         // Sometimes login flow sets cookies in the process of several redirects.
//         // Wait for the final URL to ensure that the cookies are actually set.
//         await page.waitForURL('http://localhost:4173/');
//         await use(page);
//     }
// });