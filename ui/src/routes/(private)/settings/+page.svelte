<script>
	import { Plus, User, Users, ChevronRight, X } from 'lucide-svelte';

	let familyGroup = null;
	let showCreateGroupForm = false;
	let groupName = '';
	let newMemberName = '';
	let newMemberEmail = '';

	function createFamilyGroup() {
		if (groupName.trim()) {
			familyGroup = {
				name: groupName.trim(),
				members: []
			};
			showCreateGroupForm = false;
			groupName = '';
		}
	}

	function addFamilyMember() {
		if (newMemberName.trim() && newMemberEmail.trim()) {
			familyGroup.members = [
				...familyGroup.members,
				{ name: newMemberName.trim(), email: newMemberEmail.trim() }
			];
			newMemberName = '';
			newMemberEmail = '';
		}
	}

	function removeFamilyMember(index) {
		familyGroup.members = familyGroup.members.filter((_, i) => i !== index);
	}
</script>

<!-- Header -->
<div class="bg-blue-700 p-6 text-white">
	<h1 class="mb-2 text-2xl font-bold">Settings</h1>
	<p class="text-blue-200">Manage your app settings</p>
</div>

<!-- Settings Content -->
<div class="p-6">
	<h2 class="mb-4 text-xl font-bold text-gray-800">Family Group</h2>

	{#if !familyGroup}
		{#if showCreateGroupForm}
			<div class="mb-4 rounded-xl bg-gray-50 p-4">
				<h3 class="mb-2 text-lg font-semibold">Create Family Group</h3>
				<form on:submit|preventDefault={createFamilyGroup} class="space-y-3">
					<div>
						<label for="groupName" class="block text-sm font-medium text-gray-700">Group Name</label
						>
						<input
							type="text"
							id="groupName"
							bind:value={groupName}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div class="flex justify-end space-x-2">
						<button
							type="button"
							on:click={() => (showCreateGroupForm = false)}
							class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Cancel
						</button>
						<button
							type="submit"
							class="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Create Group
						</button>
					</div>
				</form>
			</div>
		{:else}
			<button
				on:click={() => (showCreateGroupForm = true)}
				class="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				<div class="flex items-center">
					<div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
						<Users class="h-5 w-5 text-blue-600" />
					</div>
					<span class="text-sm font-medium text-gray-900">Create Family Group</span>
				</div>
				<ChevronRight class="h-5 w-5 text-gray-400" />
			</button>
		{/if}
	{:else}
		<div class="mb-4 rounded-xl bg-gray-50 p-4">
			<h3 class="mb-2 text-lg font-semibold">{familyGroup.name}</h3>
			<ul class="space-y-2">
				{#each familyGroup.members as member, index}
					<li class="flex items-center justify-between rounded-lg bg-white p-3">
						<div class="flex items-center">
							<User class="mr-2 h-5 w-5 text-blue-600" />
							<span>{member.name}</span>
						</div>
						<button
							on:click={() => removeFamilyMember(index)}
							class="text-red-500 hover:text-red-700"
						>
							<X class="h-5 w-5" />
						</button>
					</li>
				{/each}
			</ul>
			<form on:submit|preventDefault={addFamilyMember} class="mt-4 space-y-3">
				<div>
					<label for="memberName" class="block text-sm font-medium text-gray-700">Name</label>
					<input
						type="text"
						id="memberName"
						bind:value={newMemberName}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						required
					/>
				</div>
				<div>
					<label for="memberEmail" class="block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						id="memberEmail"
						bind:value={newMemberEmail}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						required
					/>
				</div>
				<button
					type="submit"
					class="w-full rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Add Family Member
				</button>
			</form>
		</div>
	{/if}

	<!-- Other settings options can be added here -->
</div>
