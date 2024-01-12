<script lang="ts">
	import GithubIcon from "$lib/assets/icons/github.svelte";
	import LinkedinIcon from "$lib/assets/icons/linkedin.svelte";
</script>

<div class="fixed left-0 right-0 bottom-0 z-30 h-0 pl-4 xl:pl-0">
	<div class="mx-auto max-w-screen-xl relative">
		<aside class="absolute bottom-0 left-0 md:flex flex-col justify-end hidden h-screen">
			<ul
				class="flex flex-col gap-3 after:mx-auto mx-auto w-10 after:block after:h-20 after:w-[1px] after:bg-gray-900 after:dark:bg-gray-400"
			>
				<li class="group">
					<a href="https://github.com/fuaberu/" target="_blank" rel="noopener noreferrer"  class="flex justify-center"
						><GithubIcon /></a
					>
				</li>
				<li class="group">
					<a href="https://www.linkedin.com/in/kevin-fabel/" target="_blank" rel="noopener noreferrer" class="flex justify-center">
						<LinkedinIcon />
					</a>
				</li>
			</ul>
		</aside>
	</div>
</div>
