<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl my-1">View admin</h1>
<p class="my-1">Email: {data.data.email}</p>
<p class="my-1">Added by: {data.data.updatedBy}</p>
<p class="my-1">Added on: {data.data.updatedOn}</p>
<div class="py-3">
	<a href="{data.pageId}/delete" class="bg-red-700 rounded-sm p-2 my-7">Delete</a>
	<a href="{data.pageId}/edit" class="underline text-blue-600 my-4 py-6">Edit</a>
	<a href="/admins" class="underline text-blue-600">Back to home</a>
</div>
