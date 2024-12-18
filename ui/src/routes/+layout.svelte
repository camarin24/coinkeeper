<script lang="ts">
	import '../app.css';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
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
	import { goto } from '$app/navigation';

	let { children } = $props();
	onMount(() => {
		(async function () {
			if (!pb.authStore.isValid) {
				await pb.collection('users').authWithPassword('cm961224@gmail.com', 'vQLBJJrnUkG6GGv');
				goto('/');
			}
			const users = await pb.collection('groups').getFullList();
		})();
	});

	let cardTab = $state('physical');
	function showModal() {
		const my_modal_5 = document.getElementById('my_modal_5') as HTMLDialogElement;
		my_modal_5.showModal();
	}
</script>

<div class="min-h-screen bg-gray-100">
	<!-- Home Screen -->
	<div class="mx-auto min-h-screen max-w-md bg-white">
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
			<div class="mx-auto grid max-w-md grid-cols-5 items-center p-4">
				<a href="/login" class="flex flex-col items-center gap-1 text-blue-600">
					<Home class="h-6 w-6" />
					<span class="text-xs">Home</span>
				</a>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<History class="h-6 w-6" />
					<span class="text-xs">History</span>
				</button>
				<button
					onclick={showModal}
					class="-mt-6 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-blue-600 text-white"
				>
					<Plus class="h-6 w-6" />
				</button>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<Wallet class="h-6 w-6" />
					<span class="text-xs">Accounts</span>
				</button>
				<button class="flex flex-col items-center gap-1 text-gray-400">
					<BookCopy class="h-6 w-6" />
					<span class="text-xs">Categories</span>
				</button>
			</div>
		</div>
	</div>

	<!-- Cards Screen -->
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
</div>
