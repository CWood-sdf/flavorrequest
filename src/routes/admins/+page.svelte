<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl">Admins</h1>
<table class="table-auto rounded w-full my-4">
	<thead class=" bg-slate-50 dark:bg-slate-700">
		<tr class="text-left">
			<th class=" p-3 border border-slate-600">Email</th>
			<th class=" p-3 border border-slate-600">Added by</th>
			<th class="border border-slate-600 w-40" />
		</tr>
	</thead>
	<tbody class=" bg-slate-100 dark:bg-slate-800">
		{#each data.data as item}
			<tr class="">
				<!-- {#if i === displayData.length - 1}
					<td class=" px-3 py-2 rounded-bl-md border border-slate-700">
						{item[0]}
					</td>
					<td class=" px-3 py-2 rounded-br-md border border-slate-700">
						{item[1]}
					</td>
				{:else} -->
				<td class=" px-3 py-2 border border-slate-700">
					{item.email}
				</td>
				<td class=" px-3 py-2 border border-slate-700">
					{item.updatedBy}
				</td>
				<td class=" px-3 py-2 border border-slate-700">
					<a href="admins/{item.id}/edit" class="underline text-blue-400">Edit</a> |
					<a href="admins/{item.id}" class="underline text-blue-400">View</a>
					|
					<a href="admins/{item.id}/delete" class="underline text-blue-400">Delete</a>
				</td>
				<!-- {/if} -->
			</tr>
		{/each}
	</tbody>
</table>
<a href="admins/new" class="underline text-blue-400">Add new admin</a>
<div class="text-sm my-2">
	Data may take a few seconds to refresh so you may need to reload the page
</div>
