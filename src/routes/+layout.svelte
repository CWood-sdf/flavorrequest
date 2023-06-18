<script>
	import '../app.css';
	// import 'carbon-components-svelte/css/g100.css';
	// import { InlineLoading, Header, Content, Button } from 'carbon-components-svelte';
	// let theme = 'g100'; // "white" | "g10" | "g80" | "g90" | "g100"

	import { authDone, user, signOut, signIn } from '$lib/stores/auth';

	// import { Login, Logout } from 'carbon-icons-svelte/lib';
	// import { page } from '$app/stores';
	// import { loadConfigFromFile } from 'vite';

	const unsubscribe = authDone.subscribe((value) => {
		if (value) {
			console.log('authDone');
			if (!$user) {
				signIn();
			}
			unsubscribe();
		}
	});
</script>

<main class="bg-white dark:bg-gray-900 h-screen w-screen text-slate-950 dark:text-white px-4">
	<header class="py-5">
		{#if !$authDone}
			<p>Loading...</p>
		{:else if $user}
			<span class="px-2">Logged in as {$user.displayName}</span>
			<button on:click={() => signOut()} class="bg-gray-200 dark:bg-blue-400 px-3 py-2 rounded-md">
				Log out
			</button>
		{:else}
			Not logged in.
			<button on:click={() => signIn()} class="bg-gray-200 dark:bg-blue-400 px-3 py-2 rounded-md"
				>Login</button
			>
		{/if}
	</header>
	{#if $user && $authDone}
		<slot class="w-full" />
	{/if}
</main>

<style lang="postcss">
	/* :global(html) {
		//background-color: theme(colors.gray.950);
		//color: theme(colors.gray.100);
	} */

	/* .header {
		width: 100vw;
		padding: 0px;
		margin: 0px;
	}
	.loggedinas {
		margin-right: 10px;
	}
	button {
		border: none;
		background-color: #292929;
		color: white;
		border-radius: 3px;
	} */
</style>
