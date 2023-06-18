<script>
	import { page } from '$app/stores';
	const e = $page?.error?.message;
	const message = e?.substring(0, e?.indexOf(':'));
	const extraData = e?.substring(e?.indexOf(':') + 1).split(',');
</script>

<div class="bg-red-300 dark:bg-red-950 p-5 rounded-lg">
	<h1 class="text-2xl pb-3">Request failed</h1>
	{#if $page.status === 400 && message === 'Exists already'}
		<div>
			It looks like you already have a request for the same flavor submitted on {extraData?.at(0)}
		</div>
	{:else}
		<div>Something went wrong. Please try again later.</div>
	{/if}

	<div class="text-sm pt-3">Please reload the page to refresh</div>
</div>
