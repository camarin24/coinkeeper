<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import NavItem from '$lib/components/ui/nav-item.svelte';
	import Nav from '$lib/components/ui/nav.svelte';
	import Select from '$lib/components/ui/select.svelte';
	import { Activity, Plus, WalletCards } from 'lucide-svelte';
	import type { Snippet } from 'svelte';
	import type { ActionData, LayoutData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';

	let { data, children, form }: { data: LayoutData; children: Snippet; form: ActionData } =
		$props();

	let open = $state(false);
	let loading = $state(false);
</script>

<div class="flex h-full py-2">
	<div
		class="w-[300px] min-w-[300px] bg-app-800 rounded-lg ring-1 ring-neutral-700 text-gray-50 py-2 px-4 shadow-lg min-h-full"
	>
		<Nav>
			{#snippet items()}
				<NavItem active>
					{#snippet icon()}
						<Activity class="w-5 h-5 z-10" />
					{/snippet}
					Overview
				</NavItem>
			{/snippet}
		</Nav>
		<hr class="border border-neutral-800 my-2" />
		<button
			onclick={() => (open = true)}
			class="hover:bg-app-700 hover:text- rounded-lg px-2 py-2 font-semibold w-full text-neutral-400 flex justify-between items-center"
		>
			<span class="flex items-center"><WalletCards class="w-5 h-5 mr-2" />Accounts</span>
			<Plus class="w-4 h-4 ml-2" />
		</button>
		<Nav>
			{#snippet items()}
				{#each data.accounts as account}
					<NavItem>
						{#snippet icon()}
							<div class="w-4 h-4 ml-2"></div>
						{/snippet}
						{account.name}
						{#snippet badge()}
							{account.transactions.length}
						{/snippet}
					</NavItem>
				{/each}
			{/snippet}
		</Nav>
		<ul></ul>
	</div>
	<div class="flex-auto p-4">
		{@render children()}
	</div>
</div>
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
