<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form class="p-3 rounded" method="post">
	<h1 class="text-2xl py-3">Edit Flavor</h1>
	<div class="dark:bg-gray-900 rounded-sm py-3">
		<label for="name">Name</label>
		<input
			name="name"
			type="text"
			class="bg-white dark:bg-gray-900 p-1 w-96"
			value={data.data.name}
		/>
	</div>
	<div class="dark:bg-gray-900 rounded-sm py-3">
		<label for="description">Description</label>
		<input
			name="description"
			type="text"
			class="bg-white dark:bg-gray-900 p-1 w-96"
			value={data.data.description}
		/>
	</div>
	<div class="py-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
	<a href="../{data.pageId}" class="underline text-blue-400 py-3">Cancel</a>
</form>
