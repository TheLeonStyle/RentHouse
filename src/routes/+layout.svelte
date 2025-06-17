<script>
	const { children } = $props();
	import '$lib/scss/styles.scss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
{@render children()}
<Footer />
