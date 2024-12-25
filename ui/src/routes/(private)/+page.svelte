<script>
	import {
		Banknote,
		Bell,
		Car,
		Cog,
		Download,
		Send,
		ShoppingBag,
		Wallet,
		Wallet2
	} from 'lucide-svelte';

	let activeTab = 'all';

	const transactions = [
		{
			id: 1,
			type: 'expense',
			category: 'Grocery',
			amount: -50.68,
			merchant: 'Eataly downtown',
			date: 'Aug 26',
			icon: ShoppingBag
		},
		{
			id: 2,
			type: 'expense',
			category: 'Transport',
			amount: -6.0,
			merchant: 'UBER Pool',
			date: 'Aug 26',
			icon: Car
		},
		{
			id: 3,
			type: 'income',
			category: 'Payment',
			amount: 650.0,
			merchant: 'Payment from Andre',
			date: 'Aug 25',
			icon: Wallet2
		}
	];
</script>

<div class="bg-blue-700">
	<div class="bg-blue-700 p-6 text-white">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="text-4xl font-bold">$2,589.50</h1>
				<p class="text-blue-200">Available Balance</p>
			</div>
		</div>

		<!-- Quick Actions -->
		<!-- <div class="grid grid-cols-4 gap-4 mb-4">
			{#each [{ icon: Send, label: 'Send' }, { icon: Download, label: 'Request' }, { icon: Banknote, label: 'Loan' }, { icon: Wallet, label: 'Topup' }] as action}
				<button class="flex flex-col items-center">
					<div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-1">
						<svelte:component this={action.icon} class="w-6 h-6" />
					</div>
					<span class="text-sm">{action.label}</span>
				</button>
			{/each}
		</div> -->
	</div>
	<div class="rounded-t-3xl bg-base-100 p-6">
		<div class="mb-4 flex items-center justify-between">
			<h2 class="text-xl font-bold text-gray-800">Recent Transactions</h2>
			<button class="text-blue-600">See all</button>
		</div>

		<!-- Transaction Filters -->
		<div class="mb-6 flex gap-2">
			<button
				class="rounded-full px-4 py-2 {activeTab === 'all' ? 'bg-gray-200' : 'bg-gray-100'}"
				on:click={() => (activeTab = 'all')}
			>
				All
			</button>
			<button
				class="rounded-full px-4 py-2 {activeTab === 'income' ? 'bg-gray-200' : 'bg-gray-100'}"
				on:click={() => (activeTab = 'income')}
			>
				<span class="flex items-center gap-1">
					<span class="h-2 w-2 rounded-full bg-green-500"></span>
					Income
				</span>
			</button>
			<button
				class="rounded-full px-4 py-2 {activeTab === 'expense' ? 'bg-gray-200' : 'bg-gray-100'}"
				on:click={() => (activeTab = 'expense')}
			>
				<span class="flex items-center gap-1">
					<span class="h-2 w-2 rounded-full bg-red-500"></span>
					Expense
				</span>
			</button>
		</div>

		<!-- Transaction List -->
		<div class="space-y-6">
			<p class="text-sm text-gray-500">TODAY</p>
			{#each transactions as transaction}
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
							<svelte:component this={transaction.icon} class="h-5 w-5 text-blue-600" />
						</div>
						<div>
							<p class="font-medium text-gray-800">{transaction.category}</p>
							<p class="text-sm text-gray-500">{transaction.merchant}</p>
						</div>
					</div>
					<div class="text-right">
						<p class="font-medium {transaction.amount > 0 ? 'text-green-500' : 'text-gray-800'}">
							{transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
						</p>
						<p class="text-sm text-gray-500">{transaction.date}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
