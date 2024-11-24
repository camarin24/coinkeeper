<script lang="ts">
	import '../app.css';
	import { CreditCard, House, Layers, Plus, WalletCards } from 'lucide-svelte';
	let { children } = $props();
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<aside class="min-h-screen">
			<ul class="menu text-base-content min-h-full w-56">
				<li>
					<a href="/">
						<House class="w-5 h-5" />
						Dashboard
					</a>
				</li>
				<li>
					<a href="/accounts" class="active">
						<Layers class="w-5 h-5" />
						Accounts
					</a>
				</li>
				<li>
					<a href="/accounts" class="">
						<CreditCard class="w-5 h-5" />
						Transactions
					</a>
				</li>
				<li>
					<h2 class="menu-title">Transactions</h2>
					<button class="btn btn-sm justify-start">
						<Plus class="w-5 h-5" />
						New transaction</button
					>
					<ul>
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
						<li><a>Item 3</a></li>
					</ul>
				</li>
				<li>
					<h2 class="menu-title">Accounts</h2>
					<button class="btn btn-sm justify-start">
						<Plus class="w-5 h-5" />
						New account</button
					>
					<ul>
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
						<li><a>Item 3</a></li>
					</ul>
				</li>
			</ul>
		</aside>
	</div>
	<div class="drawer-content">
		<main class="container mx-auto pt-4">
			{@render children()}
		</main>
	</div>
</div>
