<script lang="ts">
	export let singleName: string;
	export let names: [string, string][];
</script>

<form class="p-3 rounded" method="POST" action="?/send">
	<div class="p-3 text-2xl">Make a new {singleName}</div>
	{#each names as [name, label]}
		<div class="p-3 dark:bg-gray-900 rounded-sm">
			<label for={name}>{label}</label>
			<input {name} type="text" class="bg-white dark:bg-gray-900 p-1" />
		</div>
	{/each}
	<div class="p-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
</form>
