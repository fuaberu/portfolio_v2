<script lang="ts">
	let experiences = [
		{
			title: "Web developer",
			company: "Logon Informática",
			timeframe: "2022 - PRESENT",
			description: [
				"Modernized the Enterprise Resource Planning (ERP) payment system by incorporating banks' REST APIs. This streamlined the management of client payment records, significantly enhancing the company's client acquisition process.",
				"Engineered a client management system in collaboration with a facial recognition partner company, overseeing on-site access and attendance tracking."
			],
			tecnologies: ["PHP", "JavaScript", "HTML", "CSS", "JQuery", "MySQL"]
		}
	];
</script>

<svelte:head>
	<title>Experience | Kevin Alves Fabel</title>
	<meta name="description" content="Kevin Alves Fabel working experience">
</svelte:head>
<div class="min-h-full md:flex md:gap-6">
	<h1 class="hidden flex-1 text-center text-3xl md:block">My experience</h1>
	<div class="mx-auto flex w-full max-w-md flex-col gap-3 md:max-w-full md:flex-[2]">
		<h1 class="sm:mb-6 text-3xl md:hidden">My experience</h1>
		{#each experiences as e}
			<div
				class="rounded-md bg-clip-padding p-2 backdrop-blur-sm backdrop-filter duration-300 hover:bg-gray-700 hover:bg-opacity-50 hover:drop-shadow-lg sm:p-6 md:flex md:gap-6"
			>
				<header>{e.timeframe}</header>
				<div>
					<h3 class="text-2xl font-bold leading-snug text-gray-300">{e.title}</h3>
					<h4>{e.company}</h4>
					<ul class="my-3">
						{#each e.description as d}
							<li class="text-gray-400">
								<p>
									{d}
								</p>
							</li>
						{/each}
					</ul>
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
