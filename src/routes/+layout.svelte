<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from "@iconify/svelte";
	import { page } from '$app/stores';
	let { children } = $props();

	let scrollY = $state()
	let innerWidth = $state()
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={innerWidth}></svelte:window>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
