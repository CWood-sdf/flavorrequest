<script>
	import { signIn } from '$lib/stores/auth';
	import { urlencoded } from 'express';
	if (urlencoded.toString() == 'true') {
		console.log('urlencoded is true');
	}
	signIn();
	document.location.href = '/';
</script>
