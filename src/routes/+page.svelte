<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container-fluid">
	<div>
		<h4>Most popular</h4>
	</div>

	<div
		style="display: flex; flex-direction:row; flex-wrap:wrap;gap:15px;width:100%;justify-content:space-between;"
	>
		<!-- card -->
		{#each data.products.products as product}
			<!-- content here -->

			<Card {product} />
		{/each}
	</div>
</main>
