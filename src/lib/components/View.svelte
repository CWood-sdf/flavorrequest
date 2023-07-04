<script lang="ts">
	interface DataElement {
		id: number;
		[key: string]: any;
	}
	export let data: { data: DataElement; pageId: string };
	export let props: [string, string][];
	export let singleName: string;
	export let route: string = singleName + 's';
</script>

<h1 class="text-2xl my-1">View {singleName}</h1>
{#each props as [name, label]}
	<p class="my-1">{label}: {data.data[name]}</p>
{/each}
<div class="py-3">
	<a href="{data.pageId}/delete" class="bg-red-700 rounded-sm p-2 my-7">Delete</a>
	<a href="{data.pageId}/edit" class="underline text-blue-600 my-4 py-6">Edit</a>
	<a href="/{route}" class="underline text-blue-600">Back to home</a>
</div>
