<script lang="ts">
	import Edit from '$lib/components/Edit.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Edit bind:data props={[['email', 'Email']]} singleName="admin" />
