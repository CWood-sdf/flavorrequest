import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	projects: [
		// { name: 'setup', testMatch: /auth.setup.ts/ },
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
				// Use prepared auth state.
				// storageState: 'playwright/.auth/user.json',
			},
			dependencies: []
		},

		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
				// Use prepared auth state.
				// storageState: 'playwright/.auth/user.json',
			},
			dependencies: []
		}
	],
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests'
};

export default config;
