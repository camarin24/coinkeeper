<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { object } from 'zod';

	let {
		type,
		name,
		errors
	}: { type: HTMLInputTypeAttribute; name: string; errors?: string | string[] } = $props();
</script>

<input
	{name}
	{type}
	class={cn('block mt-1 bg-app-900 border-0 text-neutral-400 ring-1 rounded-lg w-full', {
		'ring-neutral-700 focus:ring-neutral-500': !errors,
		'ring-red-700 focus:ring-red-500': errors
	})}
/>
{#if errors}
	{#if typeof errors == 'object'}
		{#each errors as error}
			<span class="text-sm text-red-700">{error}</span>
		{/each}
	{:else}
		<span class="text-sm text-red-700">{errors}</span>
	{/if}
{/if}
