<script>
	const { children } = $props();
	import '$lib/scss/styles.scss';

	import Header from '$lib/components/Header.svelte';
</script>

<!-- <Header /> -->
{@render children()}
