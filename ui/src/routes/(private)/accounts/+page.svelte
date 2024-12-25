<script>
	import { Plus, Trash2, ChevronRight, CreditCard, Wallet } from 'lucide-svelte';

	let accounts = [
		{ id: 1, name: 'Main Account', type: 'Checking', balance: 2589.5 },
		{ id: 2, name: 'Savings', type: 'Savings', balance: 10000.0 },
		{ id: 3, name: 'Emergency Fund', type: 'Savings', balance: 5000.0 }
	];

	let showCreateForm = false;
	let newAccountName = '';
	let newAccountType = 'Checking';
	let selectedAccount = null;

	function createAccount() {
		if (newAccountName.trim()) {
			const newAccount = {
				id: accounts.length + 1,
				name: newAccountName.trim(),
				type: newAccountType,
				balance: 0
			};
			accounts = [...accounts, newAccount];
			newAccountName = '';
			newAccountType = 'Checking';
			showCreateForm = false;
		}
	}

	function deleteAccount(id) {
		accounts = accounts.filter((account) => account.id !== id);
		if (selectedAccount && selectedAccount.id === id) {
			selectedAccount = null;
		}
	}

	function selectAccount(account) {
		selectedAccount = account;
	}
</script>

<!-- Header -->
<div class="bg-blue-700 p-6 text-white">
	<h1 class="mb-2 text-2xl font-bold">Accounts</h1>
	<p class="text-blue-200">Manage your bank accounts</p>
</div>

<!-- Account List -->
<div class="p-6">
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-xl font-bold text-gray-800">Your Accounts</h2>
		<button
			on:click={() => (showCreateForm = true)}
			class="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
		>
			<Plus class="h-5 w-5" />
		</button>
	</div>

	{#if showCreateForm}
		<div class="mb-4 rounded-xl bg-gray-50 p-4">
			<h3 class="mb-2 text-lg font-semibold">Create New Account</h3>
			<form on:submit|preventDefault={createAccount} class="space-y-3">
				<div>
					<label for="accountName" class="block text-sm font-medium text-gray-700"
						>Account Name</label
					>
					<input
						type="text"
						id="accountName"
						bind:value={newAccountName}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						required
					/>
				</div>
				<div>
					<label for="accountType" class="block text-sm font-medium text-gray-700"
						>Account Type</label
					>
					<select
						id="accountType"
						bind:value={newAccountType}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					>
						<option value="Checking">Checking</option>
						<option value="Savings">Savings</option>
					</select>
				</div>
				<div class="flex justify-end space-x-2">
					<button
						type="button"
						on:click={() => (showCreateForm = false)}
						class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Cancel
					</button>
					<button
						type="submit"
						class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Create
					</button>
				</div>
			</form>
		</div>
	{/if}

	<ul class="space-y-2">
		{#each accounts as account (account.id)}
			<li>
				<button
					on:click={() => selectAccount(account)}
					class="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<div class="flex items-center">
						<div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
							<svelte:component
								this={account.type === 'Checking' ? CreditCard : Wallet}
								class="h-5 w-5 text-blue-600"
							/>
						</div>
						<div class="text-left">
							<h3 class="text-sm font-medium text-gray-900">{account.name}</h3>
							<p class="text-sm text-gray-500">{account.type}</p>
						</div>
					</div>
					<div class="flex items-center">
						<p class="mr-2 text-sm font-medium text-gray-900">${account.balance.toFixed(2)}</p>
						<ChevronRight class="h-5 w-5 text-gray-400" />
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>

<!-- Account Details Modal -->
{#if selectedAccount}
	<div
		class="fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50"
		on:click={() => (selectedAccount = null)}
	>
		<div
			class="relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg"
			on:click|stopPropagation
		>
			<div class="mt-3 text-center">
				<h3 class="text-lg font-medium leading-6 text-gray-900">{selectedAccount.name}</h3>
				<div class="mt-2 px-7 py-3">
					<p class="text-sm text-gray-500">
						Account Type: {selectedAccount.type}
					</p>
					<p class="mt-4 text-lg font-bold">
						Balance: ${selectedAccount.balance.toFixed(2)}
					</p>
				</div>
				<div class="items-center px-4 py-3">
					<button
						on:click={() => deleteAccount(selectedAccount.id)}
						class="w-full rounded-md bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
					>
						Delete Account
					</button>
				</div>
				<div class="items-center px-4 py-3">
					<button
						on:click={() => (selectedAccount = null)}
						class="w-full rounded-md bg-gray-200 px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
