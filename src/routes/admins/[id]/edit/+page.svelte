<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form class="p-3 rounded" method="POST">
	<h1 class="text-2xl py-3">Edit admin</h1>
	<div class="dark:bg-gray-900 rounded-sm py-3">
		<label for="email">Email address</label>
		<input
			name="email"
			type="text"
			class="bg-white dark:bg-gray-900 p-1 w-96"
			value={data.data.email}
		/>
	</div>
	<div class="py-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
	<a href="../{data.pageId}" class="underline text-blue-400 py-3">Cancel</a>
</form>
