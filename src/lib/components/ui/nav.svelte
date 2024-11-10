<script lang="ts">
	import type { Snippet } from 'svelte';

	let { items }: { items: Snippet } = $props();
</script>

<nav>
	<ul class="list-none space-y-2">
		{@render items()}
	</ul>
</nav>
