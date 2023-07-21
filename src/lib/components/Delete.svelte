<script lang="ts">
	export let title: string;
	export let name: string;
	export let route: string;
	export let singleName: string = route.substring(0, route.length - 1);
</script>

<h1 class="text-2xl font-bold my-2">Delete {title}</h1>

<p>Are you sure you want to delete the {singleName} {name}?</p>

<form method="post" action="?/send">
	<input type="hidden" name="_method" value="DELETE" />
	<button type="submit" class="bg-red-700 p-2 my-4 rounded-md">Delete</button>
	<a href="/{route}" class="bg-blue-700 p-2 my-2 rounded-md">Cancel</a>
</form>
