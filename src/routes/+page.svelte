<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import Input from '$lib/components/ui/input.svelte';
	import NavItem from '$lib/components/ui/nav-item.svelte';
	import Nav from '$lib/components/ui/nav.svelte';
	import { Activity, Plus, WalletCards } from 'lucide-svelte';

	let open = $state(false);
</script>

<div class="grid lg:grid-cols-2 gap-4 w-full">
	<div class="card bg-base-200 shadow-md">
		<div class="card-body">
			<p>If a dog chews shoes whose shoes does he choose?</p>
		</div>
	</div>
	<div class="card bg-base-200 shadow-md">
		<div class="card-body">
			<p>If a dog chews shoes whose shoes does he choose?</p>
		</div>
	</div>
</div>
