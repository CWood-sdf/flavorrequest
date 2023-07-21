<script lang="ts">
	interface DataElement {
		id: number;
		[key: string]: any;
	}
	export let data: { data: DataElement[] };
	export let props: [string, string][];
	export let title: string;
	export let singleName: string;
	export let route: string = singleName + 's';
</script>

<h1 class="text-2xl">{title}</h1>
<table class="table-auto rounded w-full my-4">
	<thead class=" bg-slate-50 dark:bg-slate-700">
		<tr class="text-left">
			{#each props as [_, name]}
				<th class=" p-3 border border-slate-600">{name}</th>
			{/each}
			<th class="border border-slate-600 w-40" />
		</tr>
	</thead>
	<tbody class=" bg-slate-100 dark:bg-slate-800">
		{#each data.data as item}
			<tr class="">
				{#each props as [accessor, _]}
					<td class=" px-3 py-2 border border-slate-700">
						{item[accessor]}
					</td>
				{/each}
				<td class=" px-3 py-2 border border-slate-700">
					<a href="{route}/{item.id}/edit" class="underline text-blue-400"
						>Edit</a
					>
					|
					<a href="{route}/{item.id}" class="underline text-blue-400">View</a>
					|
					<a href="{route}/{item.id}/delete" class="underline text-blue-400"
						>Delete</a
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
<a href="{route}/new" class="underline text-blue-400">Add new {singleName}</a>
<div class="text-sm my-2">
	Data may take a few seconds to refresh so you may need to reload the page
</div>
