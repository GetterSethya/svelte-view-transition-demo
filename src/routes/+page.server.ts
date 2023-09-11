import type { PageServerLoad } from './$types';
import { API_ROOT } from '$env/static/private';
async function fetchItems() {
	const items = await fetch(API_ROOT + 'products');

	return await items.json();
}

export const load: PageServerLoad = async () => {
	return { products: (await fetchItems()) || { products: [] } };
};
