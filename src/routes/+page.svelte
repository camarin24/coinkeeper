<script lang="ts">
	import NavItem from '$lib/components/ui/nav-item.svelte';
	import Nav from '$lib/components/ui/nav.svelte';
	import { House } from 'lucide-svelte';
</script>

<div class="flex h-full py-2">
	<div
		class="w-[400px] bg-app-800 rounded-lg ring-1 ring-neutral-700 text-gray-50 py-2 px-4 shadow-lg min-h-full"
	>
		<Nav>
			{#snippet items()}
				<NavItem active>
					{#snippet icon()}
						<House class="w-5 h-5 z-10" />
					{/snippet}
					Home
				</NavItem>
				<NavItem active={false}>
					{#snippet icon()}
						<House class="w-5 h-5 z-10" />
					{/snippet}
					Home
				</NavItem>
			{/snippet}
		</Nav>
	</div>
	<div class="flex-auto">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veritatis nostrum cumque
		officia. Eaque voluptatibus asperiores labore doloremque, magni rem culpa id vitae est
		dignissimos dolorum quae, temporibus vel? Illo!
	</div>
</div>
