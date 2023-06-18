<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let dropdownItems = data.props.data.map((item, index) => {
		return {
			id: index + '',
			text: `${item.Name} (${item.Description})`,
			name: item.Name
		};
	});
</script>

<h1 class="text-2xl">Flavors</h1>

<table class="table-auto rounded w-full my-4">
	<thead class=" bg-slate-50 dark:bg-slate-700">
		<tr class="text-left">
			<th class=" p-3 border border-slate-600">Flavor Name</th>
			<th class=" p-3 border border-slate-600">Flavor Description</th>
		</tr>
	</thead>
	<tbody class=" bg-slate-100 dark:bg-slate-800">
		{#each data.props.data as item}
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
					{item.Name}
				</td>
				<td class=" px-3 py-2 border border-slate-700">
					{item.Description}
				</td>
				<!-- {/if} -->
			</tr>
		{/each}
	</tbody>
</table>
