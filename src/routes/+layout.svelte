<script lang="ts">
	import "../app.css";
	import Header from "$lib/components/layout/header.svelte";
	import SocialMedia from "$lib/components/layout/socialMedia.svelte";
	import MouseHighlight from "$lib/components/mouseMask.svelte";
	import { onNavigate } from "$app/navigation";
	import { onMount } from "svelte";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		detectSWUpdate();
	});

	const detectSWUpdate = async () => {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener("updatefound", () => {
			const newSW = registration.installing;

			newSW?.addEventListener("statechange", () => {
				if (newSW.state === "installed") {
					newSW.postMessage({ type: "SKIP_WAITING" });
				}
			});
		});
	};
</script>

<MouseHighlight />
<Header />

<SocialMedia />
<div class="relative mx-auto flex min-h-full max-w-screen-xl pt-14 md:px-4 md:pt-[72px]">
	<div class="hidden shrink-0 grow-0 basis-16 md:block"></div>
	<main class="min-h-full w-full p-3 md:mr-16">
		<slot />
	</main>
</div>
