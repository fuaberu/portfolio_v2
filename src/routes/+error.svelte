<script>
	import { page } from "$app/stores";
</script>

<div class="flex w-full flex-col items-center justify-start pt-20">
	<h1 class="mb-3 text-7xl font-bold sm:text-9xl">{$page.status}</h1>
	<p class="text-lg font-medium text-slate-500">
		Sorry, {$page.error?.message}
	</p>
	<a
		class="mt-7 border-b border-transparent font-medium hover:border-teal-300 hover:text-teal-300"
		href="/"
	>
		<span>Go to Homepage</span>
	</a>
</div>
