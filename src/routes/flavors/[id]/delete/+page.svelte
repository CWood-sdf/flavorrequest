<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl font-bold my-2">Delete Flavor</h1>

<p>Are you sure you want to delete the flavor {data.data.name}?</p>

<form method="post">
	<input type="hidden" name="_method" value="DELETE" />
	<button type="submit" class="bg-red-700 p-2 my-4 rounded-md">Delete</button>
	<a href="/flavors" class="bg-blue-700 p-2 my-2 rounded-md">Cancel</a>
</form>
