<script>
	import Header from '$lib/Header.svelte';
	import '/src/styles/styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	
</style>
