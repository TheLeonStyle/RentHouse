<script>
	const { images } = $props();

	import { galleryStore, galleryIndex } from '$lib/stores';
	import KeenSlider from 'keen-slider';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let slider = null;
	let sliderRef = null;

	const slidePrev = () => {
		slider.prev();
	};
	const slideNext = () => {
		slider.next();
	};

	onMount(() => {
		slider = new KeenSlider(sliderRef, {
			mode: 'free-snap',
			loop: true,
			initial: $galleryIndex,
			slides: {
				perView: 1,
				spacing: 15
			}
		});
	});
</script>

<dialog class="slider" onclick={() => galleryStore.close()} transition:slide>
	<div class="slider__container" onclick={(event) => event.stopPropagation()}>
		<button class="slider__close" onclick={() => galleryStore.close()}>
			<svg viewBox="0 0 50 50">
				<path
					d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
			</svg>
		</button>

		<ul bind:this={sliderRef} class="slider__items">
			{#each images as image}
				<li class="slider__item keen-slider__slide">
					<img src={`/img/home/gallery/${image.src}`} alt="" class="slider__image" />
				</li>
			{/each}
		</ul>

		<button class="slider__button slider__button--prev" onclick={slidePrev}>
			<svg viewBox="0 0 24 24">
				<path
					d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" />
			</svg>
		</button>

		<button class="slider__button slider__button--next" onclick={slideNext}>
			<svg viewBox="0 0 24 24">
				<path
					d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" />
			</svg>
		</button>
	</div>
</dialog>

<style lang="scss">
	.slider {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 11;
		width: 100%;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: 0.5);

		/* .slider__container */
		&__container {
			display: flex;
			flex-direction: column;
		}
		/* .slider__header */
		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: rem(15) 0;
		}
		/* .slider__quantity */
		&__quantity {
			color: #ffffff;
			font-size: rem(18);
			line-height: math.div(22, 18);
		}
		/* .slider__close */
		&__close {
			padding: rem(15) 0;
			margin-left: auto;
			svg {
				width: rem(30);
				height: rem(30);
				fill: #ffffff;
			}
		}
		/* .slider__items */
		&__items {
			display: flex;
			overflow: hidden;

			width: 100%;
			height: calc(100vh - rem(82));
		}
		/* .slider__item */
		&__item {
		}
		/* .slider__image */
		&__image {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		// /* .slider__button */
		&__button {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			svg {
				// width: rem(70);
				// height: rem(70);

				@include adaptiveValue('width', 70, 50, 767, 320, 1);
				@include adaptiveValue('height', 70, 50, 767, 320, 1);

				path {
					fill: #ffffff;
				}
			}

			/* .slider__button--prev */
			&--prev {
				left: 0;
			}
			/* .slider__button--next */
			&--next {
				right: 0;
				transform: rotate(-180deg) translateY(50%);
			}
		}
	}
</style>
