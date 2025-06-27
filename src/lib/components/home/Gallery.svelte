<script>
	import { scale } from 'svelte/transition';
	import { galleryStore, isGalleryOpen } from '$lib/stores';
	import GallerySlider from '$lib/components/utils/GallerySlider.svelte';

	const categories = ['Все', 'Дом снаружи', 'Дом внутри'];
	let categoryIndex = $state(0);

	const images = [
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-snaruzhi-4-1.jpg',
			category: 1
		},
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-snaruzhi-4-4.jpg',
			category: 1
		},
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-snaruzhi-4-2.jpg',
			category: 2
		},
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-vnutri-4-18.jpg',
			category: 2
		},
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-vnutri-4-20.jpg',
			category: 1
		},
		{
			src: 'https://domnareke30.ru/wp-content/uploads/2024/05/dom-vnutri-4-22.jpg',
			category: 2
		}
	];

	const handleCategoryClick = (index) => (categoryIndex = index);

	let filteredImages = $derived(
		categoryIndex === 0 ? images : images.filter((img) => img.category === categoryIndex)
	);
</script>

<section class="gallery">
	<div class="gallery__container">
		<h2 class="gallery__text text">Фотогалерея</h2>

		<nav class="gallery__categories">
			{#each categories as category, index}
				<button
					class="gallery__category"
					class:active={categoryIndex === index}
					onclick={() => handleCategoryClick(index)}>
					{category}
				</button>
			{/each}
		</nav>

		<ul class="gallery__items">
			{#each filteredImages as image, index}
				{#if categoryIndex === 0 || categoryIndex === image.category}
					<li class="gallery__item" transition:scale>
						<img
							src={image.src}
							alt=""
							class="gallery__image"
							loading="lazy"
							onclick={() => galleryStore.open(index)} />
					</li>
				{/if}
			{/each}
		</ul>
	</div>

	{#if $isGalleryOpen}
		<GallerySlider images={filteredImages} />
	{/if}
</section>

<style lang="scss">
	.gallery {
		@include adaptiveValue('padding-top', 50, 30, 991, 320, 1);
		@include adaptiveValue('padding-bottom', 50, 30, 991, 320, 1);

		/* .gallery__container */
		&__container {
		}
		/* .gallery__text */
		&__text {
			// margin-bottom: rem(40);
			@include adaptiveValue('margin-bottom', 40, 10, 767, 320, 1);
		}
		/* .gallery__categories */
		&__categories {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			// gap: rem(40);
			@include adaptiveValue('gap', 40, 20, 767, 320, 1);

			// margin-bottom: rem(30);
			@include adaptiveValue('margin-bottom', 30, 20, 767, 320, 1);
		}
		/* .gallery__category */
		&__category {
			color: #111111;
			// font-size: rem(24);
			@include adaptiveValue('font-size', 20, 16, 767, 320, 1);
			font-weight: 500;
			line-height: math.div(30, 24);
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;

				width: 0;
				height: rem(2);
				background-color: #2b7af1;
				transition: width 0.3s ease 0s;
			}

			&:hover,
			&.active {
				&::after {
					width: 100%;
				}
			}
		}
		/* .gallery__items */
		&__items {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: rem(10);
			@media (max-width: $mobile) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: $mobileSmall) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
		/* .gallery__item */
		&__item {
			// height: rem(260);
			@include adaptiveValue('height', 260, 200, 991, 767, 1);
			border-radius: rem(20);
			overflow: hidden;
		}
		/* .gallery__image */
		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			cursor: pointer;
			transition: transform 0.3s ease 0s;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
</style>
