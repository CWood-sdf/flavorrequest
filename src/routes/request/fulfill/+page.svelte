<script>
	// import {
	// 	// @ts-ignore
	// 	OrderedList,
	// 	// @ts-ignore
	// 	ListItem,
	// 	Dropdown,
	// 	Form,
	// 	Button,
	// 	Checkbox,
	// 	FormGroup
	// } from 'carbon-components-svelte';
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
	function onSubmit() {
		console.log('sdf');
	}
	let flavorId = '0';
</script>

<form class="p-3 dark:bg-gray-900 rounded" on:submit={onSubmit} method="POST">
	<div class="p-3 text-2xl">Put in a new flavor</div>
	<div class="p-3 dark:bg-gray-900 rounded-sm">
		<label for="flavor">Select a flavor</label>
		<select name="flavor" class="bg-white dark:bg-gray-900 p-1">
			{#each dropdownItems as item}
				<option class="bg-white dark:bg-gray-900" value={item.name}>{item.text}</option>
			{/each}
		</select>
	</div>
	<div class="p-3">
		<input type="submit" class="bg-blue-700 p-2 rounded-md" />
	</div>
</form>

<!-- <OrderedList style="padding-left: 100px">
	{#each data.props.data as item}
		<ListItem>{item.Name} ({item.Description})</ListItem>
	{/each}
</OrderedList> -->
