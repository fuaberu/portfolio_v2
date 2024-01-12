<script lang="ts">
	import logo from "$lib/assets/logo.svg";
	import { page } from "$app/stores";
	import { cubicIn } from "svelte/easing";
	import { fade, fly } from "svelte/transition";
	import { onNavigate } from "$app/navigation";
	import GithubIcon from "$lib/assets/icons/github.svelte";
	import LinkedinIcon from "$lib/assets/icons/linkedin.svelte";

	let open: boolean = false;

	export const toggleOpen = () => (open = !open);

	onNavigate(() => {
		open = false;
	});

	function onKeydownWindow(event: KeyboardEvent) {
		if (!open) return;

		if (event.code === "Escape") open = false;
	}
</script>

<header
	class="fixed left-0 right-0 top-0 z-30 flex justify-between bg-gray-900 bg-opacity-20 bg-clip-padding px-4 py-2 backdrop-blur-sm backdrop-filter md:py-4"
>
	<nav class="mx-auto max-w-screen-xl flex-1">
		<ul class="flex items-center gap-4">
			<li class="relative mr-auto">
				<a href="/"><img src={logo} alt="Logo" class="mx-auto h-10 w-10" /></a>
			</li>
			<li class="hidden md:block">
				<a
					href="/about"
					class:active={$page.url.pathname === "/about"}
					class="border-b border-b-transparent hover:text-teal-300">About</a
				>
			</li>
			<li class="hidden md:block">
				<a
					href="/experience"
					class:active={$page.url.pathname === "/experience"}
					class="border-b border-b-transparent hover:text-teal-300">Experience</a
				>
			</li>
			<li class="hidden md:block">
				<a
					href="/work"
					class:active={$page.url.pathname === "/work"}
					class="border-b border-b-transparent hover:text-teal-300">Work</a
				>
			</li>
			<li class="hidden md:block">
				<a
					href="/contact"
					class:active={$page.url.pathname === "/contact"}
					class="border-b border-b-transparent hover:text-teal-300">Contact</a
				>
			</li>
			<li class="group relative hidden self-stretch md:block">
				<div class="absolute inset-0 -z-10 rounded-md bg-teal-300"></div>
				<a
					href="/resume.pdf"
					target="_blank"
					class="flex h-full flex-col items-center justify-center rounded-md border border-teal-300 bg-gray-200 px-4 duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 dark:bg-gray-800"
					>Resume</a
				>
			</li>
		</ul>
	</nav>
	<button class="md:hidden" on:click={toggleOpen} aria-label="Menu" type="button">
		{#if open}
			<svg fill="none" viewBox="0 0 24 24" class="h-8 w-8 fill-black dark:fill-white">
				<path
					fill-rule="evenodd"
					d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm6 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else}
			<svg fill="none" viewBox="0 0 24 24" class="h-8 w-8 stroke-black dark:stroke-white">
				<path stroke-linecap="round" stroke-width="2" d="M4 18h16M4 12h16M4 6h16" />
			</svg>
		{/if}
	</button>
</header>
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if open}
	<div
		class="absolute inset-0 z-10 bg-gray-900 bg-opacity-30"
		on:click={toggleOpen}
		on:keydown={onKeydownWindow}
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100, easing: cubicIn }}
	></div>
	<div
		class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col rounded-e-none rounded-s-md bg-gray-700 bg-opacity-60 bg-clip-padding p-4 pb-10 drop-shadow-lg backdrop-blur-sm backdrop-filter"
		role="dialog"
		aria-modal="true"
		in:fly={{ x: 200, duration: 200 }}
		out:fly={{ x: 200, duration: 200, easing: cubicIn }}
	>
		<button
			class="btn-icon absolute right-4 top-2 z-30 h-10 w-8"
			type="button"
			on:click={toggleOpen}
			><svg class="h-8 w-8 fill-black dark:fill-white" viewBox="0 0 1024 1024">
				<path
					d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
				/>
			</svg></button
		>
		<nav class="mt-10 w-full">
			<ul class="flex flex-col items-start gap-5 text-center">
				<li class="w-full">
					<a
						href="/about"
						class:active={$page.url.pathname === "/about"}
						class="border-b border-b-transparent hover:text-teal-300">About</a
					>
				</li>
				<li class="w-full">
					<a
						href="/experience"
						class:active={$page.url.pathname === "/experience"}
						class="border-b border-b-transparent hover:text-teal-300">Experience</a
					>
				</li>
				<li class="w-full">
					<a
						href="/work"
						class:active={$page.url.pathname === "/work"}
						class="border-b border-b-transparent hover:text-teal-300">Work</a
					>
				</li>
				<li class="w-full">
					<a
						href="/contact"
						class:active={$page.url.pathname === "/contact"}
						class="border-b border-b-transparent hover:text-teal-300">Contact</a
					>
				</li>
				<li class="mt-2 w-full">
					<a
						href="/resume.pdf"
						target="_blank"
						class="rounded-md border border-teal-300 bg-gray-200 px-4 py-2 dark:bg-gray-800"
						>Resume</a
					>
				</li>
			</ul>
		</nav>
		<ul class="mt-auto flex items-center justify-evenly">
			<li class="group">
				<a href="https://github.com/fuaberu/" target="_blank" rel="noopener noreferrer"
					><GithubIcon /></a
				>
			</li>
			<li class="group">
				<a
					href="https://www.linkedin.com/in/kevin-fabel/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinIcon />
				</a>
			</li>
		</ul>
	</div>
{/if}

<style lang="postcss">
	.active {
		@apply border-teal-300;
	}
</style>
