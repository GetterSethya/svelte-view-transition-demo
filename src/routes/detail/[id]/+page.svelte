<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
</script>

<div class="container-fluid" style="position:relative">
	<img class="banner" src={data.item.images[2] || data.item.images[0]} alt="" />
	<div class="container-display">
		<img
			class="hero"
			src={data.item.thumbnail}
			alt=""
			style={`view-transition-name: ${btoa($page.params.id).replace(/=/g, '')}-image`}
		/>
		<div>
			<span style={`view-transition-name: ${btoa($page.params.id).replace(/=/g, '')}-item`}
				>{data.item.title}</span
			>
			<span style={`view-transition-name: ${btoa($page.params.id).replace(/=/g, '')}-price`}
				>${data.item.price}</span
			>
			<div>
				<span style="display: flex;gap:2px;"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="yellow"
						class="bi bi-star-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
						/>
					</svg>{data.item.rating}</span
				>
				<span>{data.item.brand}</span>
				<span>{data.item.category}</span>
			</div>
		</div>
	</div>

	<article>{data.item.description}</article>
</div>

<style>
	.banner {
		width: 100%;
		height: 20em;
		object-fit: cover;
		border-radius: 15px;
	}
	.hero {
		margin-top: -9%;
		height: 10em;
		object-fit: cover;
		width: 10em;
		border-radius: 15px;
	}
	.container-display {
		display: flex;
	}
	.container-display > div {
		margin-inline-start: 1em;
		font-weight: bold;
		font-size: 25px;
		display: flex;
		flex-direction: column;
	}

	.container-display > div > div {
		font-size: 12px;
		margin-top: 0.5em;
		gap: 14px;
		display: flex;
	}

	.container-display > div > div > span {
		background-color: #333333;
		padding: 1em;
		border-radius: 20px;
	}

	.container-display > div > div > span:hover {
		background-color: #555555;
	}
</style>
