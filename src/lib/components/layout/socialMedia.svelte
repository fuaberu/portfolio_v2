<script lang="ts">
	import GithubIcon from "$lib/assets/icons/github.svelte";
	import LinkedinIcon from "$lib/assets/icons/linkedin.svelte";
</script>

<aside class="fixed left-5 top-0 bottom-0 h-full md:flex flex-col justify-end hidden">
	<ul
		class="flex flex-col gap-3 after:mx-auto after:block after:h-20 after:w-[1px] after:bg-gray-900 after:dark:bg-gray-400"
	>
		<li class="group">
			<a href="https://github.com/fuaberu/" target="_blank" rel="noopener noreferrer"
				><GithubIcon /></a
			>
		</li>
		<li class="group">
			<a href="https://www.linkedin.com/in/kevin-fabel/" target="_blank" rel="noopener noreferrer">
				<LinkedinIcon />
			</a>
		</li>
	</ul>
</aside>
