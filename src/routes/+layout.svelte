<script>
	const { children } = $props();
	import '$lib/scss/styles.scss';
	import { isMenuOpen, isModalOpen } from '$lib/stores';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/utils/Modal.svelte';
	import Menu from '$lib/components/utils/Menu.svelte';
</script>

{#if $isModalOpen}
	<Modal />
{/if}
<!-- {#if $isMenuOpen} -->
<Menu />
<!-- {/if} -->
<Header />
{@render children()}
<Footer />
