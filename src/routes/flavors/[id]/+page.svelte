<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl my-1">View admin</h1>
<p class="my-1">Name: {data.data.Name}</p>
<p class="my-1">Short Description: {data.data.Description}</p>
<div class="py-3">
	<a href="{data.pageId}/delete" class="bg-red-700 rounded-sm p-2 my-7">Delete</a>
	<a href="{data.pageId}/edit" class="underline text-blue-600 my-4 py-6">Edit</a>
	<a href="/flavors" class="underline text-blue-600">Back to home</a>
</div>
