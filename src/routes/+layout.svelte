<script lang="ts">
	import {
		Banknote,
		Bell,
		BookCopy,
		CreditCard,
		Download,
		History,
		Home,
		MoreVertical,
		Plus,
		Send,
		User,
		Wallet
	} from 'lucide-svelte';
	import '../app.css';
	let { children } = $props();
	let cardTab = 'physical';

	function showModal() {
		const my_modal_5 = document.getElementById('my_modal_5') as HTMLDialogElement;
		my_modal_5.showModal();
	}
</script>

<div class="min-h-screen bg-gray-100">
	<!-- Home Screen -->
	<div class="max-w-md mx-auto bg-white min-h-screen">
		<!-- Header -->

		<!-- Transactions -->

		{@render children()}
		<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="text-lg font-bold">Hello!</h3>
				<p class="py-4">Press ESC key or click the button below to close</p>
				<div class="modal-action">
					<form method="dialog">
						<!-- if there is a button in form, it will close the modal -->
						<button class="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>

		<!-- Bottom Navigation -->
		<div class="fixed bottom-0 left-0 right-0 bg-white">
			<div class="max-w-md mx-auto grid grid-cols-5 items-center p-4">
				<button class="flex flex-col items-center gap-1 text-blue-600">
					<Home class="w-6 h-6" />
					<span class="text-xs">Home</span>
				</button>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<History class="w-6 h-6" />
					<span class="text-xs">History</span>
				</button>
				<button
					on:click={showModal}
					class="flex flex-col items-center justify-center w-14 h-14 bg-blue-600 rounded-full text-white -mt-6"
				>
					<Plus class="w-6 h-6" />
				</button>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<Wallet class="w-6 h-6" />
					<span class="text-xs">Accounts</span>
				</button>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<BookCopy class="w-6 h-6" />
					<span class="text-xs">Categories</span>
				</button>
			</div>
		</div>
	</div>

	<!-- Cards Screen -->
	<div class="max-w-md mx-auto bg-gray-50 min-h-screen">
		<div class="p-6">
			<div class="flex justify-between items-center mb-4">
				<h1 class="text-2xl font-bold text-gray-800">Your Cards</h1>
				<button>
					<MoreVertical class="w-6 h-6" />
				</button>
			</div>
			<p class="text-gray-500 mb-6">2 physical card, 1 virtual card</p>

			<!-- Card Type Tabs -->
			<div class="flex gap-4 mb-6">
				<button
					class="px-6 py-2 rounded-full {cardTab === 'physical'
						? 'bg-blue-600 text-white'
						: 'bg-white'}"
					on:click={() => (cardTab = 'physical')}
				>
					Physical Card
				</button>
				<button
					class="px-6 py-2 rounded-full {cardTab === 'virtual'
						? 'bg-blue-600 text-white'
						: 'bg-white'}"
					on:click={() => (cardTab = 'virtual')}
				>
					Virtual Card
				</button>
			</div>

			<!-- Card Display -->
			<div class="bg-[#1a2b4b] text-white p-6 rounded-xl mb-8">
				<div class="flex justify-between items-start mb-12">
					<div class="w-12">
						<img src="/placeholder.svg" alt="Visa" class="w-full" />
					</div>
					<div class="w-6">
						<img src="/placeholder.svg" alt="Chip" class="w-full" />
					</div>
				</div>
				<p class="text-xl mb-6">**** **** **** 2864</p>
				<div class="flex justify-between text-sm">
					<div>
						<p class="text-gray-400 mb-1">CARD HOLDER</p>
						<p>Card Holder Name</p>
					</div>
					<div>
						<p class="text-gray-400 mb-1">EXPIRES</p>
						<p>08/22</p>
					</div>
					<div>
						<p class="text-gray-400 mb-1">CVV</p>
						<p>826</p>
					</div>
				</div>
			</div>

			<!-- Card Settings -->
			<h2 class="text-xl font-bold text-gray-800 mb-4">Card Settings</h2>
			<div class="space-y-4">
				{#each [{ icon: Wallet, label: 'Contactless Payment', enabled: true }, { icon: CreditCard, label: 'Online Payment', enabled: false }, { icon: Download, label: 'ATM Withdraws', enabled: true }] as setting}
					<div class="flex items-center justify-between bg-white p-4 rounded-xl">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
								<svelte:component this={setting.icon} class="w-5 h-5 text-blue-600" />
							</div>
							<span class="font-medium text-gray-800">{setting.label}</span>
						</div>
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" class="sr-only peer" checked={setting.enabled} />
							<div
								class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
							></div>
						</label>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
</style>
