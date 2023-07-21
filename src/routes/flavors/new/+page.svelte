<script lang="ts">
	// import type { PageData } from './$types';
	import New from '$lib/components/New.svelte';

	// export let data: PageData;
	function onSubmit() {}
</script>

<New
	singleName="flavor"
	names={[
		['name', 'Name'],
		['description', 'Short Description']
	]}
/>
