<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, name }: { children: Snippet; name: string } = $props();
</script>

<select
	{name}
	class="block mt-1 bg-app-900 border-0 text-neutral-400 ring-1 ring-neutral-700 focus:ring-neutral-500 rounded-lg w-full"
>
	{@render children()}
</select>
