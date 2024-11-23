<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	let {
		open = $bindable(),
		children,
		title,
		formId
	}: { open: boolean; children?: Snippet; title: string; formId: string } = $props();

	function closeModal() {
		open = false;
	}
</script>

{#if open}
	<div class="fixed inset-0 z-10 flex items-center justify-center">
		<!-- Background overlay with fade transition -->
		<div
			onkeyup={undefined}
			role="button"
			tabindex="0"
			aria-pressed="false"
			class="fixed inset-0 bg-black bg-opacity-50"
			onclick={closeModal}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 200 }}
		></div>

		<!-- Outer wrapper for fly transition -->
		<div
			class="relative z-20 w-full max-w-lg p-6"
			in:fly={{ y: 20, duration: 300 }}
			out:fly={{ y: -20, duration: 200 }}
		>
			<!-- Inner wrapper for scale transition with dark theme styling -->
			<div
				class="bg-app-800 text-gray-200 rounded-lg shadow-lg p-6 sm:w-auto"
				in:scale={{ duration: 300 }}
				out:scale={{ duration: 200 }}
			>
				<div class="flex items-start">
					<div class="w-full">
						<h3 class="text-lg font-semibold text-white">{title}</h3>
						<div class="mt-4 w-full">
							{#if children}
								{@render children()}
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
