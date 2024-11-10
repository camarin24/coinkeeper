<script lang="ts">
	import { House, Settings } from 'lucide-svelte';
	import '../app.css';
	import NavItem from '$lib/components/ui/nav-item.svelte';
	import Nav from '$lib/components/ui/nav.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-dvh">
	<aside class="p-4 flex flex-col justify-between">
		<Nav>
			{#snippet items()}
				<NavItem active>
					{#snippet icon()}
						<House class="w-5 h-5 z-10" />
					{/snippet}
				</NavItem>
			{/snippet}
		</Nav>
		<Nav>
			{#snippet items()}
				<NavItem>
					{#snippet icon()}
						<Settings class="w-5 h-5 z-10" />
					{/snippet}
				</NavItem>
			{/snippet}
		</Nav>
	</aside>
	<main class="container">
		{@render children()}
	</main>
</div>
