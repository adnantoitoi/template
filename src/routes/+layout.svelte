<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:window></svelte:window>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
