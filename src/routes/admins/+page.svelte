<script lang="ts">
	import type { PageData } from './$types';
	import List from '$lib/components/List.svelte';

	export let data: PageData;
</script>

<List
	bind:data
	props={[
		['email', 'Email'],
		['updatedBy', 'Added by']
	]}
	title="Admins"
	route="admins"
	singleName="admin"
/>
