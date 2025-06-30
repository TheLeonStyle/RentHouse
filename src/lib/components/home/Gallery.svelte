<script>
	import { scale } from 'svelte/transition';
	import { galleryStore, isGalleryOpen } from '$lib/stores';
	import GallerySlider from '$lib/components/utils/GallerySlider.svelte';

	const categories = [
		'Все',
		'Территория',
		'Первый этаж',
		'Второй этаж',
		'Третий этаж',
		'Баня',
		'Летняя кухня и Веранда'
	];
	let categoryIndex = $state(0);

	const galleryImages = [
		{ src: 'outside/1.webp', category: 1 },
		{ src: 'outside/2.webp', category: 1 },
		{ src: 'outside/3.webp', category: 1 },
		{ src: 'outside/4.webp', category: 1 },
		{ src: 'outside/5.webp', category: 1 },
		{ src: 'outside/6.webp', category: 1 },
		{ src: 'outside/7.webp', category: 1 },
		{ src: 'outside/8.webp', category: 1 },
		{ src: 'outside/9.webp', category: 1 },
		{ src: 'outside/10.webp', category: 1 },
		{ src: 'outside/11.webp', category: 1 },
		{ src: 'outside/12.webp', category: 1 },
		{ src: 'outside/13.webp', category: 1 },
		{ src: 'outside/14.webp', category: 1 },
		{ src: 'outside/15.webp', category: 1 },

		{ src: 'first_floor/1.webp', category: 2 },
		{ src: 'first_floor/2.webp', category: 2 },
		{ src: 'first_floor/3.webp', category: 2 },
		{ src: 'first_floor/4.webp', category: 2 },
		{ src: 'first_floor/5.webp', category: 2 },
		{ src: 'first_floor/6.webp', category: 2 },
		{ src: 'first_floor/7.webp', category: 2 },
		{ src: 'first_floor/8.webp', category: 2 },
		{ src: 'first_floor/9.webp', category: 2 },
		{ src: 'first_floor/10.webp', category: 2 },
		{ src: 'first_floor/11.webp', category: 2 },
		{ src: 'first_floor/12.webp', category: 2 },
		{ src: 'first_floor/13.webp', category: 2 },
		{ src: 'first_floor/14.webp', category: 2 },
		{ src: 'first_floor/15.webp', category: 2 },
		{ src: 'first_floor/16.webp', category: 2 },
		{ src: 'first_floor/17.webp', category: 2 },
		{ src: 'first_floor/18.webp', category: 2 },
		{ src: 'first_floor/19.webp', category: 2 },
		{ src: 'first_floor/20.webp', category: 2 },
		{ src: 'first_floor/21.webp', category: 2 },
		{ src: 'first_floor/22.webp', category: 2 },
		{ src: 'first_floor/23.webp', category: 2 },
		{ src: 'first_floor/24.webp', category: 2 },

		{ src: 'second_floor/1.webp', category: 3 },
		{ src: 'second_floor/2.webp', category: 3 },
		{ src: 'second_floor/3.webp', category: 3 },
		{ src: 'second_floor/4.webp', category: 3 },
		{ src: 'second_floor/5.webp', category: 3 },
		{ src: 'second_floor/6.webp', category: 3 },
		{ src: 'second_floor/7.webp', category: 3 },
		{ src: 'second_floor/8.webp', category: 3 },
		{ src: 'second_floor/9.webp', category: 3 },
		{ src: 'second_floor/10.webp', category: 3 },
		{ src: 'second_floor/11.webp', category: 3 },
		{ src: 'second_floor/12.webp', category: 3 },
		{ src: 'second_floor/13.webp', category: 3 },
		{ src: 'second_floor/14.webp', category: 3 },
		{ src: 'second_floor/15.webp', category: 3 },
		{ src: 'second_floor/16.webp', category: 3 },
		{ src: 'second_floor/17.webp', category: 3 },
		{ src: 'second_floor/18.webp', category: 3 },
		{ src: 'second_floor/19.webp', category: 3 },
		{ src: 'second_floor/20.webp', category: 3 },

		{ src: 'third_floor/1.webp', category: 4 },
		{ src: 'third_floor/2.webp', category: 4 },
		{ src: 'third_floor/3.webp', category: 4 },
		{ src: 'third_floor/4.webp', category: 4 },
		{ src: 'third_floor/5.webp', category: 4 },

		{ src: 'bath/1.webp', category: 5 },
		{ src: 'bath/2.webp', category: 5 },
		{ src: 'bath/3.webp', category: 5 },
		{ src: 'bath/4.webp', category: 5 },
		{ src: 'bath/5.webp', category: 5 },
		{ src: 'bath/6.webp', category: 5 },
		{ src: 'bath/7.webp', category: 5 },

		{ src: 'summer_kitchen_and_veranda/1.webp', category: 6 },
		{ src: 'summer_kitchen_and_veranda/2.webp', category: 6 },
		{ src: 'summer_kitchen_and_veranda/3.webp', category: 6 },
		{ src: 'summer_kitchen_and_veranda/4.webp', category: 6 },
		{ src: 'summer_kitchen_and_veranda/5.webp', category: 6 }
	];

	const handleCategoryClick = (index) => (categoryIndex = index);

	let filteredImages = $derived(
		categoryIndex === 0
			? galleryImages
			: galleryImages.filter((img) => img.category === categoryIndex)
	);
</script>

<section class="gallery" id="gallery">
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
							src={`/img/home/gallery/${image.src}`}
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
			@include adaptiveValue('column-gap', 30, 20, 767, 320, 1);
			row-gap: rem(20);
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
			grid-template-columns: repeat(4, 1fr);
			gap: rem(10);
			@media (max-width: $mobile) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: $mobileSmall) {
				grid-template-columns: repeat(2, 1fr);
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
