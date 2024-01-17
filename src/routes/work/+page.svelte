<script lang="ts">
	import GithubIcon from "$lib/assets/icons/github.svelte";
	import EyeIcon from "$lib/assets/icons/eye.svelte";
	import Eye from "$lib/assets/icons/eye.svelte";

	let experiences: {
		title: string;
		company?: string;
		description: string[];
		tecnologies: string[];
		links: { github?: string; preview?: string };
	}[] = [
		{
			title: "Manebo",
			description: [
				"Development of a robust Enterprise Resource Planning (ERP) application designed to efficiently manage recurring business client data.",
				"Leveraged a cutting-edge tech stack including Next.js, Tailwind, TypeScript, and PostgreSQL to create a seamless and responsive user experience.",
				"Implemented an automated workflow with continuous integration and continuous deployment using GitHub and Vercel, optimizing the development and deployment process for increased efficiency."
			],
			tecnologies: ["Nextjs", "TypeScript", "Tailwind", "PostgreSQL", "Reactjs", "Nodejs"],
			links: {
				github: "",
				preview: "https://manebo.vercel.app/"
			}
		},
		{
			title: "Daily Water Reminder (React, Firebase, TypeScript)",
			description: [
				"Developed a Progressive Web App (PWA) for monitoring users' daily water intake, promoting healthy hydration habits.",
				"Implemented secure social authentication using Firebase and Google Cloud, ensuring a robust and user-friendly login system.",
				"Established continuous integration through GitHub workflow actions hosted on Google Cloud via Firebase, enhancing project scalability and efficiency"
			],
			tecnologies: ["Reactjs", "TypeScript", "Firebase", "CSS"],
			links: {
				github: "https://github.com/fuaberu/water-daily-intake",
				preview: "https://water-reminder-web.web.app/"
			}
		}
	];
</script>

<svelte:head>
	<title>Work | Kevin Alves Fabel</title>
	<meta name="description" content="Kevin Alves Fabel side projects">
</svelte:head>
<div class="min-h-full md:flex md:gap-6">
	<h1 class="hidden flex-1 text-center text-3xl md:block">My projects</h1>
	<div class="mx-auto flex w-full max-w-md flex-col gap-3 md:max-w-full md:flex-[2]">
		<h1 class="sm:mb-6 text-3xl md:hidden">My projects</h1>
		{#each experiences as e}
			<div
				class="rounded-md bg-clip-padding p-2 backdrop-blur-sm backdrop-filter duration-300 hover:bg-gray-700 hover:bg-opacity-50 hover:drop-shadow-lg sm:p-6 md:flex md:gap-6"
			>
				<div>
					<h3 class="text-3xl font-bold leading-snug dark:text-gray-300">{e.title}</h3>
					{#if e.company}
						<h4>{e.company}</h4>
					{/if}
					<div class="my-3 text-gray-400">
						{#each e.description as d}
							<p class="mb-3">
								{d}
							</p>
						{/each}
					</div>
					<div class="mb-4 flex flex-wrap gap-3">
						{#if e.links.github}
							<a
								class="group rounded-md p-2 drop-shadow-md dark:bg-gray-700"
								href={e.links.github}
								target="_blank"
								rel="noopener noreferrer"><GithubIcon /></a
							>
						{/if}
						{#if e.links.preview}
							<a
								class="group rounded-md p-2 drop-shadow-md dark:bg-gray-700"
								href={e.links.preview}
								target="_blank"
								rel="noopener noreferrer"><Eye /></a
							>
						{/if}
					</div>
					<div class="flex flex-wrap gap-1">
						{#each e.tecnologies as t}
							<span
								class="block rounded-3xl bg-gray-900 bg-opacity-70 px-3 py-1 text-xs font-semibold text-teal-300"
							>
								{t}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
