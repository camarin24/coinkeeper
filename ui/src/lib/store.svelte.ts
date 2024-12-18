import { pb } from './pocketbase';

let user = $state();

export function userState() {
	if (!user) {
		(async function () {
			user = await pb.collection('users').authRefresh();
		})();
	}
}
