<script>
	import Intro from '$lib/components/home/Intro.svelte';
	import Gallery from '$lib/components/home/Gallery.svelte';
	import Contacts from '$lib/components/home/Contacts.svelte';
	import Feedback from '$lib/components/home/Feedback.svelte';
	import Advantages from '$lib/components/home/Advantages.svelte';
	import Description from '$lib/components/home/Description.svelte';
</script>

<svelte:head>
	<title>Гостевой дом Premium Царев | Аренда дома с баней и бассейном в Астрахани</title>
	<meta
		name="description"
		title="Уютный гостевой дом на берегу реки Царев в Астрахани. Аренда дома с баней на дровах, бассейном с подогревом и просторной территорией. Идеально для отдыха на природе и уединения." />
</svelte:head>

<Intro />
<Advantages />
<Description />
<Gallery />
<Contacts />
<Feedback />
