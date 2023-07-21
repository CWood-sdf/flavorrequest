import { expect, test } from '@playwright/test';
import { readFileSync } from 'fs';
// import auth from '../playwright/.auth/user.json';
test('index page has expected h1', async ({ page, baseURL }) => {
	// console.log("Waiting for auth page");
	const auth = JSON.parse(readFileSync('./playwright/.auth/user.json', 'utf8'));
	await page.goto('/');
	await page.waitForLoadState('domcontentloaded');
	console.log('filling username');
	// await page.getByAltText(/Email/).click({ trial: true });
	await page.getByLabel(/Email/).fill(auth.username);
	// await page.getByLabel('Email or phone').fill(auth.username);
	console.log('clicking next');
	await page.getByText('Next').click();
	console.log('waiting for password page');
	await page.waitForURL(
		/^https:\/\/accounts\.google\.com\/v3\/signin\/challenge*$/
	);
	// console.log("filling password");
	// await page.getByLabel('Enter your password').fill(auth.password);
	console.log('clicking next');
	await page.getByText('Next').click();
	console.log('waiting for redirect');
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	// await page.waitForURL(baseURL == undefined ? 'http://localhost:3000/' : baseURL);
	console.log('starting test');
	await page.waitForURL(
		baseURL == undefined ? 'http://localhost:3000/' : baseURL
	);
	await page.waitForLoadState('domcontentloaded');
	await expect(
		page.getByRole('heading', { name: 'Welcome to SvelteKit' })
	).toBeVisible();
});
