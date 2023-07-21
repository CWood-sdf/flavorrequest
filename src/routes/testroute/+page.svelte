<script>
	import { config } from 'dotenv';
	config();
	const apiKey = process.env.PUBLIC_FIREBASE_API_KEY;
</script>

<div>
	{apiKey}
</div>
