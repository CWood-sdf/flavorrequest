<script lang="ts">
	import Delete from '$lib/components/Delete.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Delete title="Admin" name={data.data.email} route="admins" />
