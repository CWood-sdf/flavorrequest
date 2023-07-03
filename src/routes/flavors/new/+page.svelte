<script lang="ts">
	// import type { PageData } from './$types';

	// export let data: PageData;
	function onSubmit() {}
</script>

<form class="p-3 rounded" on:submit={onSubmit} method="POST">
	<div class="p-3 text-2xl">Make a new flavor</div>
	<div class="p-3 dark:bg-gray-900 rounded-sm">
		<label for="name">Name</label>
		<input name="name" type="text" class="bg-white dark:bg-gray-900 p-1" />
	</div>
	<div class="p-3 dark:bg-gray-900 rounded-sm">
		<label for="description">Description</label>
		<input name="description" type="text" class="bg-white dark:bg-gray-900 p-1" />
	</div>
	<div class="p-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
</form>
