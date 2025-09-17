<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import {fly} from 'svelte/transition'
	import Icon from "@iconify/svelte";
	import { page } from '$app/stores';
    import Logo from '$lib/assets/Logo.svelte';
    import NavLink from '$lib/assets/NavLink.svelte';
	let { children,data } = $props();
	let scrollY = $state()
	let innerWidth = $state()

	let authVisible = $state(true)
	let sideNavVisible = $state(false)
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={innerWidth}></svelte:window>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="screen">
	<nav class="nav p-3 flex items-center justify-between border-b-1">
		<a href="/">
			{#if data.user}
				{data.user.name}
			{/if}
			<Logo/>
		</a>
		
		<div class="links flex gap-3 items-center">
			<NavLink to="/about" name="About"/>
			<NavLink to="/contact" name="Contact"/>
			{#if $page.url.pathname != '/register' && $page.url.pathname != '/login'}
				<button onclick={()=>{authVisible = true}}>
				<Icon icon="prime:user" class="text-4xl hover:brightness-70"/>
			</button>
			{/if}
			
		</div>
	</nav>

	<div class="page">
		{@render children?.()}
	</div>
	{#if authVisible && $page.url.pathname != '/register' && $page.url.pathname != '/login'}
		{@render auth()}
	{/if}
	

</div>





{#snippet auth()}
	<div transition:fly={{x:500,duration:500}} class="p-4 py-6 h-dvh w-full md:w-[70vw] lg:w-[30vw] absolute bg-surface-900 lg:border-l-1 top-0 right-0">
		<div class="flex w-full flex-row-reverse">
			<button onclick={()=>{authVisible = false}}>
				<Icon icon="line-md:close-circle" class="text-4xl hover:brightness-70"/>
			</button>
		</div>
		<form action="?/login" method="post" class="flex flex-col h-8/10 items-center justify-between">
			<div class="container w-full">
				<h1 class="h1 md:h2 text-center font-bold">Sign in</h1>
				<label for="username">Username/Email</label>
				<input type="text" id="username" name="username" class="input">
				<label for="password">password</label>
				<input type="password" id="password" name="password" class="input">
				<div class="flex items-center p-3"></div>
				<button class="btn bg-primary-500 w-full">Sign in</button>
			</div>
			<div class="container w-full border-1 border-surface-500 p-3 flex items-center justify-around">
				<div class="flex flex-col items-center">
					<Icon icon="prime:user" class="text-9xl text-surface-300"/>
					<span class="text-xl w-30 text-center">Already have an account?</span>
				</div>
				<NavLink to="/register" name="Register" fill="primary-500"/>
			</div>
		</form>
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