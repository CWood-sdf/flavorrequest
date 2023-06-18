<script>
	// import { Dropdown, Form, Button, Checkbox, FormGroup, Header } from 'carbon-components-svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);
	let dropdownItems = data.props.data.map((item, index) => {
		return {
			id: index + '',
			text: `${item.Name} (${item.Description})`,
			name: item.Name
		};
	});
	// @ts-ignore
	function onSubmit(e) {
		console.log('sdf');
	}
	let flavorId = '0';
	let useEmail = true;
</script>

<form class="p-3 rounded" on:submit={onSubmit} method="POST">
	<div class="p-3 text-2xl">Request a flavor</div>
	<div class="p-3 dark:bg-gray-900 rounded-sm">
		<label for="flavor">Select a flavor</label>
		<select name="flavor" class="bg-white dark:bg-gray-900 p-1">
			{#each dropdownItems as item}
				<option class="bg-white dark:bg-gray-900" value={item.name}>{item.text}</option>
			{/each}
		</select>
	</div>
	<div class="p-3 dark:bg-gray-900 rounded-sm mt-1">
		<label for="use-email">I would like an email when this flavor is available</label>
		<input name="use-email" type="checkbox" class="bg-white dark:bg-gray-900" checked />
	</div>
	<div class="p-3">
		<button type="submit" class="bg-blue-700 p-2 rounded-md">Submit</button>
	</div>
</form>

<!-- <OrderedList style="padding-left: 100px">
	{#each data.props.data as item}
		<ListItem>{item.Name} ({item.Description})</ListItem>
	{/each}
</OrderedList> -->
<!-- 
<link rel="stylesheet" href="/api/css/header.css" /> -->
