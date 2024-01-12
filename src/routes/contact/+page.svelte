<script lang="ts">
	import { addDoc, collection, serverTimestamp } from "firebase/firestore";
	import { z } from "zod";
	import toast from "svelte-french-toast";

	export let data;

	let errors: {
		message?: string[] | undefined;
		name?: string[] | undefined;
		email?: string[] | undefined;
	} = {};

	let form: HTMLFormElement;
	let loading: boolean = false;

	async function handleSubmit() {
		loading = true;
		const formData = Object.fromEntries(new FormData(form));

		const schema = z.object({
			message: z.string().min(1, "Message empty"),
			name: z.string().min(1, "Name is required"),
			email: z.string().email()
		});

		// parse the validation schema
		const result = schema.safeParse(formData);
		// in case of an error return the data and errors

		if (!result.success) {
			errors = result.error.flatten().fieldErrors;
			loading = false;
			return;
		}

		try {
			//	Save in firebase
			await addDoc(collection(data.db, "messages"), { ...formData, created_at: serverTimestamp() });

			toast.success("Message sent. Thank You for contacting me. I'll get back to you!");
			form.reset();
			errors = {};
		} catch (error) {
			console.log(error);
		}

		loading = false;
	}
</script>

<div class="h-full md:flex md:gap-6">
	<h1 class="hidden flex-1 text-center text-3xl md:block">Contact Me</h1>
	<div class="mx-auto flex w-full max-w-md flex-col gap-3 md:max-w-full md:flex-[2]">
		<h1 class="mb-6 text-3xl md:hidden">Contact Me</h1>
		<form
			bind:this={form}
			on:submit|preventDefault={handleSubmit}
			class="mx-auto w-full max-w-md rounded-md bg-gray-700 bg-opacity-50 bg-clip-padding p-6 drop-shadow-lg backdrop-blur-sm backdrop-filter duration-300"
		>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold" for="name"> Name </label>
				<input
					class="w-full rounded-md bg-white px-3 py-2 shadow outline-2 outline-teal-300 focus:outline dark:bg-gray-700"
					id="name"
					name="name"
					type="text"
					placeholder="Name"
					autocomplete="name"
				/>
				{#if errors?.name}
					<span class="text-red-400">{errors?.name} </span>
				{/if}
			</div>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold" for="email"> Email </label>
				<input
					class="w-full rounded-md bg-white px-3 py-2 shadow outline-2 outline-teal-300 focus:outline dark:bg-gray-700"
					id="email"
					name="email"
					type="text"
					placeholder="Email"
					autocomplete="email"
				/>
				{#if errors?.email}
					<span class="text-red-400">{errors?.email} </span>
				{/if}
			</div>
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold" for="message"> Message </label>
				<textarea
					class="w-full rounded-md bg-white px-3 py-2 shadow outline-2 outline-teal-300 focus:outline dark:bg-gray-700"
					id="message"
					name="message"
					placeholder="Message"
					rows="6"
				/>
				{#if errors?.message}
					<span class="text-red-400">{errors?.message} </span>
				{/if}
			</div>
			<button
				class="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-500 focus:border-teal-300 focus:outline-none"
				type="submit"
			>
				{#if loading}
					<div class="flex items-center gap-2">
						<svg
							class="-ml-1 h-5 w-5 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Loading...
					</div>
				{:else}Contact Me!
				{/if}
			</button>
		</form>
	</div>
</div>
