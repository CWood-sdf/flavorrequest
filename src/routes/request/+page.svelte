<script>
	// import { Grid, Row, Column } from 'carbon-components-svelte';
	// @ts-ignore
	export let data;
	// @ts-ignore
	let displayData = data.props.data.map((item) => {
		return [item.flavor, item.count];
	});
</script>

<h1 class="text-2xl">Requests</h1>
<table class="table-auto rounded w-full my-4">
	<thead class=" bg-slate-50 dark:bg-slate-700">
		<tr class="text-left">
			<th class=" p-3 border border-slate-600">Flavor</th>
			<th class=" p-3 border border-slate-600">Count</th>
		</tr>
	</thead>
	<tbody class=" bg-slate-100 dark:bg-slate-800">
		{#each displayData as item, i}
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
					{item[0]}
				</td>
				<td class=" px-3 py-2 border border-slate-700">
					{item[1]}
				</td>
				<!-- {/if} -->
			</tr>
		{/each}
	</tbody>
</table>

<div class="text-sm">
	Data may take a few seconds to refresh so you may need to reload the page
</div>
