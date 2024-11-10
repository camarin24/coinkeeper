<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = {
		active?: boolean;
		children?: Snippet;
		icon: any;
	};
	let { active, children, icon }: Props = $props();
</script>

<li class="group flex rounded-lg p-2 relative cursor-pointer hover:bg-app-700 transition-all">
	{#if active}
		<div
			class="absolute -inset-px bg-gradient-to-b from-neutral-700 from-[2%] to-[98%] to-app-700 rounded-lg"
			aria-hidden="true"
		></div>
		<div
			class="absolute inset-0 bg-app-700 group-hover:bg-app-800 rounded-lg"
			aria-hidden="true"
		></div>
		<span class="flex items-center space-x-2 text-neutral-300">
			{@render icon()}
			{#if children}
				<span class="z-10 font-semibold text-neutral-300">{@render children()}</span>
			{/if}
		</span>
	{:else}
		<span class="flex items-center space-x-2 text-neutral-400">
			<svelte:self node={icon}/>
			{#if children}
				<span class="font-semibold">{@render children()}</span>
			{/if}
		</span>
	{/if}
</li>
