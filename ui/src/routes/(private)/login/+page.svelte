<script>
	import { Mail, Lock, Eye, EyeOff } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';

	let email = '';
	let password = '';
	let showPassword = false;

	const dispatch = createEventDispatcher();

	function handleSubmit() {
		dispatch('login', { email, password });
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
	<div class="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-lg">
		<div class="bg-blue-700 p-8 text-center text-white">
			<h1 class="mb-2 text-3xl font-bold">Welcome Back</h1>
			<p class="text-blue-200">Log in to your account</p>
		</div>
		<form on:submit|preventDefault={handleSubmit} class="space-y-6 p-8">
			<div>
				<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
				<div class="relative">
					<input
						type="email"
						id="email"
						bind:value={email}
						required
						class="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter your email"
					/>
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Mail class="h-5 w-5 text-gray-400" />
					</div>
				</div>
			</div>
			<div>
				<label for="password" class="mb-1 block text-sm font-medium text-gray-700">Password</label>
				<div class="relative">
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						bind:value={password}
						required
						class="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter your password"
					/>
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Lock class="h-5 w-5 text-gray-400" />
					</div>
					<button
						type="button"
						class="absolute inset-y-0 right-0 flex items-center pr-3"
						on:click={togglePasswordVisibility}
					>
						{#if showPassword}
							<EyeOff class="h-5 w-5 text-gray-400" />
						{:else}
							<Eye class="h-5 w-5 text-gray-400" />
						{/if}
					</button>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					<label for="remember-me" class="ml-2 block text-sm text-gray-700"> Remember me </label>
				</div>
				<div class="text-sm">
					<a href="#" class="font-medium text-blue-600 hover:text-blue-500">
						Forgot your password?
					</a>
				</div>
			</div>
			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Log in
				</button>
			</div>
		</form>
		<div class="px-8 pb-8 text-center">
			<p class="text-sm text-gray-600">
				Don't have an account?
				<a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
			</p>
		</div>
	</div>
</div>
