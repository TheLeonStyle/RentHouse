<script>
	const { children } = $props();
	import '$lib/scss/styles.scss';
	import { isModalOpen } from '$lib/stores';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/utils/Modal.svelte';
</script>

<Header />
{#if $isModalOpen}
	<Modal />
{/if}
{@render children()}
<Footer />
