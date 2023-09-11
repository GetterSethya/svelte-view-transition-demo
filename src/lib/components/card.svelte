<script lang="ts">
	export let product: any;
</script>

<a href="detail/{product.id}" class="card">
	<img
		src={product.thumbnail}
		alt=""
		style={`view-transition-name: ${btoa(product.id).replace(/=/g, '')}-image`}
	/>
	<p style={`view-transition-name: ${btoa(product.id).replace(/=/g, '')}-item`}>
		{product.title}
	</p>
	<span style={`view-transition-name: ${btoa(product.id).replace(/=/g, '')}-price`}
		>${product.price}</span
	>
</a>

<style>
	.card {
		width: 10em;
		height: 15em;
		background-color: rgb(10, 33, 48);
		border-radius: 15px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
	}
	.card:hover {
		text-decoration: none;
	}
	.card > p {
		padding-inline: 1em;
		padding-top: 1em;
		font-weight: bold;
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.card > span {
		padding-bottom: 1em;
		padding-inline-start: 1em;
	}
	.card > img {
		width: 100%;
		height: 50%;
		object-fit: cover;
		border-radius: 15px;
	}
</style>
