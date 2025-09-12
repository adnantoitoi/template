<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import {fly} from 'svelte/transition'
	import Icon from "@iconify/svelte";
	import { page } from '$app/stores';
    import Logo from '$lib/assets/Logo.svelte';
    import NavLink from '$lib/assets/NavLink.svelte';
	let { children } = $props();

	let scrollY = $state()
	let innerWidth = $state()

	let authVisible = $state(false)
	let sideNavVisible = $state(false)
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={innerWidth}></svelte:window>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="screen">
	<div class="nav p-3 flex items-center justify-between border-b-1">
		<a href="/">
			<Logo/>
		</a>
		
		<div class="links flex gap-3 items-center">
			<NavLink to="/about" name="About"/>
			<NavLink to="/contact" name="Contact"/>
			<button onclick={()=>{authVisible = true}}>
				<Icon icon="prime:user" class="text-4xl hover:brightness-70"/>
			</button>
		</div>
	</div>

	<div class="page">
		{@render children?.()}
	</div>
	{#if authVisible}
		{@render auth()}
	{/if}
	

</div>





{#snippet auth()}
	<div transition:fly={{x:500,duration:500}} class="p-4 py-6 h-dvh w-[30vw] absolute bg-surface-900 border-l-1 top-0 right-0">
		<div class="flex w-full flex-row-reverse">
			<button onclick={()=>{authVisible = false}}>
				<Icon icon="line-md:close-circle" class="text-4xl hover:brightness-70"/>
			</button>
		</div>
	</div>
{/snippet}

{#snippet sideNavToggle()}
	<label class="hamburger">
		<input type="checkbox" bind:checked={sideNavVisible}>
		<svg viewBox="0 0 32 32">
			<path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
			<path class="line" d="M7 16 27 16"></path>
		</svg>
		</label>
{/snippet}


<style>
	:root{
		overflow-x: hidden;
	}
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
</style>