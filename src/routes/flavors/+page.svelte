<script lang="ts">
	import List from '$lib/components/List.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<List
	bind:data
	props={[
		['name', 'Name'],
		['description', 'Short Description']
	]}
	title="Flavors"
	route="flavors"
	singleName="flavor"
/>
