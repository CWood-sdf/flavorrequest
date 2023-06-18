// import { test as setup, expect } from '@playwright/test';
// import auth from './playwright/.auth/user.json';
// // const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ page }) => {
//     // Perform authentication steps. Replace these actions with your own.
//     console.log("Waiting for auth page");
//     await page.waitForURL(/^https:\/\/accounts\.google\.com\/v3\/signin\/identifier*$/);
//     console.log("filling username");
//     await page.getByLabel('Email or phone').fill(auth.username);
//     console.log("clicking next");
//     await page.getByText('Next').click();
//     console.log("waiting for password page");
//     await page.waitForURL(/^https:\/\/accounts\.google\.com\/v3\/signin\/challenge*$/);
//     console.log("filling password");
//     await page.getByLabel('Enter your password').fill(auth.password);
//     console.log("clicking next");
//     await page.getByText('Next').click();
//     console.log("waiting for redirect");
//     // Wait until the page receives the cookies.
//     //
//     // Sometimes login flow sets cookies in the process of several redirects.
//     // Wait for the final URL to ensure that the cookies are actually set.
//     await page.waitForURL('http://localhost:4173/');
//     await expect(page.getByText("Log out")).toBeVisible();
//     // Alternatively, you can wait until the page reaches a state where all cookies are set.
//     // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

//     // // End of authentication steps.

//     // await page.context().storageState({ path: authFile });
// });