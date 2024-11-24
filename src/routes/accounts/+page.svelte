<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Modal from '$lib/components/modal.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import Select from '$lib/components/ui/select.svelte';
	import type { Snippet } from 'svelte';
	import type { ActionData, LayoutData } from './$types';

	let { data, children, form }: { data: LayoutData; children: Snippet; form: ActionData } =
		$props();

	let open = $state(false);
	let loading = $state(false);
</script>

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quas incidunt ullam eveniet
laudantium officiis in quod. Ipsa ab, harum error sint eveniet maxime, saepe sequi quo qui autem
est!

<Modal title="Create account" bind:open formId="account-form">
	<form
		method="post"
		class="flex flex-col gap-4"
		id="account-form"
		use:enhance={({ formElement }) => {
			loading = true;
			return async ({ result }) => {
				loading = false;
				if (result.type == 'success') {
					open = false;
					formElement.reset();
					await invalidateAll();
				}
				await applyAction(result);
			};
		}}
	>
		<label class="bock">
			<span>Name</span>
			<Input type="text" name="name" errors={form?.fieldErrors?.name} />
		</label>
		<label class="bock">
			<span>Type</span>
			<Select name="type">
				{#each data.types as type}
					<option value={type}>{type}</option>
				{/each}
			</Select>
		</label>
		<label class="bock">
			<span>Balance</span>
			<Input type="number" name="balance" errors={form?.fieldErrors?.balance} />
		</label>
		<div class="mt-4 flex justify-end space-x-2">
			<button class="px-4 py-2 text-sm font-semibold text-gray-300 rounded hover:bg-app-700"
				>Cancel</button
			>
			<button
				type="submit"
				disabled={loading}
				class="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-500"
				>Create</button
			>
		</div>
	</form>
</Modal>
