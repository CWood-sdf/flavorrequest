<script lang="ts">
	import View from '$lib/components/View.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<View
	bind:data
	props={[
		['email', 'Email'],
		['updatedBy', 'Added by'],
		['updatedOn', 'AddedOn']
	]}
	singleName="admin"
/>
