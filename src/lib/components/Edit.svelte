<script lang="ts">
	interface DataElement {
		id: string;
		[key: string]: any;
	}
	export let data: {
		data: DataElement;
		pageId: string;
		email?: string | undefined;
		uid?: string | undefined;
	};
	export let props: [string, string][];
	export let singleName: string;
</script>

<form class="p-3 rounded" method="POST" action="?/send">
	<h1 class="text-2xl py-3">Edit {singleName}</h1>
	{#each props as [name, label]}
		<div class="dark:bg-gray-900 rounded-sm py-3">
			<label for={name}>{label}</label>
			<input
				{name}
				type="text"
				class="bg-white dark:bg-gray-900 p-1 w-96"
				value={data.data[name]}
			/>
		</div>
	{/each}
	<div class="py-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
	<a href="../{data.pageId}" class="underline text-blue-400 py-3">Cancel</a>
</form>
