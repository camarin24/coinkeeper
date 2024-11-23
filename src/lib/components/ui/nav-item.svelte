<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = {
		active?: boolean;
		children?: Snippet;
		icon?: any;
		href?: string;
		badge?: Snippet;
	};
	let { active, children, icon, href, badge }: Props = $props();
</script>

<li class="group flex rounded-lg p-2 relative cursor-pointer hover:bg-app-700 transition-all">
	<a {href} class="w-full">
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
				{@render icon?.()}
				{#if children}
					<span class="z-10 font-semibold text-neutral-300">{@render children()}</span>
				{/if}
			</span>
		{:else}
			<span class="flex items-center space-x-2 text-neutral-400">
				{@render icon?.()}
				{#if children}
					<span class="font-semibold w-full">{@render children()}</span>
				{/if}
				{#if badge}
					<span class="!text-xs !font-normal bg-app-700 p-1 px-2 rounded-lg"
						>{@render badge?.()}</span
					>
				{/if}
			</span>
		{/if}
	</a>
</li>
