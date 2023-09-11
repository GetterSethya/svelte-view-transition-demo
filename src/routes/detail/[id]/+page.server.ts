import { API_ROOT } from '$env/static/private';
import type { PageServerLoad } from './$types';

async function fetchItem(id: string) {
	const item = await fetch(API_ROOT + 'products/' + id);

	return item.json();
}

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;
	return { item: (await fetchItem(id)) || [] };
};
