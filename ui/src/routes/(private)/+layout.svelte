<script lang="ts">
	import '../../app.css';
	import { BookCopy, Cog, History, Home, Plus, Wallet } from 'lucide-svelte';

	let { children } = $props();

	function showModal() {
		const my_modal_5 = document.getElementById('my_modal_5') as HTMLDialogElement;
		my_modal_5.showModal();
	}
</script>

<div class="min-h-screen bg-gray-100">
	<div class="mx-auto min-h-screen bg-white">
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
				<a href="/" class="flex flex-col items-center gap-1 text-blue-600">
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
				<a href="/accounts" class="flex flex-col items-center gap-1 text-gray-400">
					<Wallet class="h-6 w-6" />
					<span class="text-xs">Accounts</span>
				</a>
				<a href="/settings" class="flex flex-col items-center gap-1 text-gray-400">
					<Cog class="h-6 w-6" />
					<span class="text-xs">Settings</span>
				</a>
			</div>
		</div>
	</div>
</div>
