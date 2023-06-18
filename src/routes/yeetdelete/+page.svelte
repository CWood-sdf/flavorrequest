<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
	let keys = {
		shift: false
	};
	function handleKeydown(event) {
		keys[event.key.toLowerCase()] = true;
	}
	function handleKeyup(event) {
		keys[event.key.toLowerCase()] = false;
	}
	let d = data.data;
	let arr = d.map(() => false);
	let lastClickedIndex = null;
	//function to fill in all the checkboxes if between two checkboxes are checked
	function fillInBetween(e) {
		let index = d.indexOf(e.target.name);
		if (lastClickedIndex === null) {
			lastClickedIndex = index;
			return;
		}
		let target = e.target.checked;
		//only allow if shift is pressed
		if (!keys.shift) {
			lastClickedIndex = index;
			return;
		}
		if (lastClickedIndex < index) {
			for (let i = lastClickedIndex; i <= index; i++) {
				arr[i] = target;
			}
		} else {
			for (let i = index; i <= lastClickedIndex; i++) {
				arr[i] = target;
			}
		}
		arr = arr;
		lastClickedIndex = index;
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />
<form method="POST">
	<ul>
		{#each d as id, i}
			<li>
				<label>
					<input
						type="checkbox"
						name={id}
						value={id}
						bind:checked={arr[i]}
						on:change={fillInBetween}
					/>
					{id}
				</label>
			</li>
		{/each}
	</ul>
	<button>Done</button>
</form>
