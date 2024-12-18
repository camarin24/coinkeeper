import { pb } from '$lib/pocketbase';
import type { Reroute } from '@sveltejs/kit';

const translated: Record<string, string> = {
	'/en/about': '/en/about',
	'/de/ueber-uns': '/de/about',
	'/fr/a-propos': '/fr/about'
};

export const reroute: Reroute = ({ url }) => {
	if (url.pathname === '/' && !pb.authStore.isValid) {
		console.log('re-routing to login');
		return '/login';
	}
	console.log('Navigating to:', url.pathname);
};
