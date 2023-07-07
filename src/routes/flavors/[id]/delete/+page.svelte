<script lang="ts">
	import Delete from '$lib/components/Delete.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Delete title="Flavor" name={data.data.name} route="flavors" />
