<script lang="ts">
	import {
		BookCopy,
		CreditCard,
		Download,
		History,
		Home,
		MoreVertical,
		Plus,
		Wallet
	} from 'lucide-svelte';
	let cardTab = $state('physical');
</script>

<div class="mx-auto min-h-screen max-w-md bg-gray-50">
	<div class="p-6">
		<div class="mb-4 flex items-center justify-between">
			<h1 class="text-2xl font-bold text-gray-800">Your Cards</h1>
			<button>
				<MoreVertical class="h-6 w-6" />
			</button>
		</div>
		<p class="mb-6 text-gray-500">2 physical card, 1 virtual card</p>

		<!-- Card Type Tabs -->
		<div class="mb-6 flex gap-4">
			<button
				class="rounded-full px-6 py-2 {cardTab === 'physical'
					? 'bg-blue-600 text-white'
					: 'bg-white'}"
				onclick={() => (cardTab = 'physical')}
			>
				Physical Card
			</button>
			<button
				class="rounded-full px-6 py-2 {cardTab === 'virtual'
					? 'bg-blue-600 text-white'
					: 'bg-white'}"
				onclick={() => (cardTab = 'virtual')}
			>
				Virtual Card
			</button>
		</div>

		<!-- Card Display -->
		<div class="mb-8 rounded-xl bg-[#1a2b4b] p-6 text-white">
			<div class="mb-12 flex items-start justify-between">
				<div class="w-12">
					<img src="/placeholder.svg" alt="Visa" class="w-full" />
				</div>
				<div class="w-6">
					<img src="/placeholder.svg" alt="Chip" class="w-full" />
				</div>
			</div>
			<p class="mb-6 text-xl">**** **** **** 2864</p>
			<div class="flex justify-between text-sm">
				<div>
					<p class="mb-1 text-gray-400">CARD HOLDER</p>
					<p>Card Holder Name</p>
				</div>
				<div>
					<p class="mb-1 text-gray-400">EXPIRES</p>
					<p>08/22</p>
				</div>
				<div>
					<p class="mb-1 text-gray-400">CVV</p>
					<p>826</p>
				</div>
			</div>
		</div>

		<!-- Card Settings -->
		<h2 class="mb-4 text-xl font-bold text-gray-800">Card Settings</h2>
		<div class="space-y-4">
			{#each [{ icon: Wallet, label: 'Contactless Payment', enabled: true }, { icon: CreditCard, label: 'Online Payment', enabled: false }, { icon: Download, label: 'ATM Withdraws', enabled: true }] as setting}
				{@const Icon = setting.icon}
				<div class="flex items-center justify-between rounded-xl bg-white p-4">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
							<Icon class="h-5 w-5 text-blue-600" />
						</div>
						<span class="font-medium text-gray-800">{setting.label}</span>
					</div>
					<label class="relative inline-flex cursor-pointer items-center">
						<input type="checkbox" class="peer sr-only" checked={setting.enabled} />
						<div
							class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"
						></div>
					</label>
				</div>
			{/each}
		</div>
	</div>
</div>
