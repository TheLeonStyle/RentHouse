<script>
	import KeenSlider from 'keen-slider';
	import { onMount } from 'svelte';

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
			slides: {
				perView: 1
			},
			defaultAnimation: {
				duration: 3000,
				easing: (time) => 1 - Math.pow(1 - time, 4)
			}
		});
	});
</script>

<section class="intro">
	<ul bind:this={sliderRef} class="intro__items">
		<li class="intro__item keen-slider__slide">
			<div class="intro__container">
				<div class="intro__text intro__text--left">
					<h2 class="intro__title">Уютный гостевой дом "Premium Царев"</h2>
					<p class="intro__subtitle">
						Тихий уголок на берегу реки всего в 10 минутах от центра Астрахани
					</p>
				</div>
			</div>
		</li>
		<li class="intro__item keen-slider__slide">
			<div class="intro__container">
				<div class="intro__text intro__text--center">
					<h2 class="intro__title">Всё продумано для вашего комфорта</h2>
					<p class="intro__subtitle">
						Полностью укомплектованный дом: кухня, спальные комнаты, бассейн, баня, мангальная зона
					</p>
				</div>
			</div>
		</li>
		<li class="intro__item keen-slider__slide">
			<div class="intro__container">
				<div class="intro__text intro__text--right">
					<h2 class="intro__title">Бассейн с подогревом и гидромассажем</h2>
					<p class="intro__subtitle">
						Чистая вода круглый год, полотенца предоставляются бесплатно
					</p>
				</div>
			</div>
		</li>
		<li class="intro__item keen-slider__slide">
			<div class="intro__container">
				<div class="intro__text intro__text--left">
					<h2 class="intro__title">Настоящая баня на дровах</h2>
					<p class="intro__subtitle">
						Парная с вениками, травяной чай и натуральный мёд в зоне отдыха
					</p>
				</div>
			</div>
		</li>
	</ul>

	<button class="intro__button intro__button--prev" onclick={slidePrev}>
		<svg viewBox="0 0 24 24">
			<path
				d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" />
		</svg>
	</button>

	<button class="intro__button intro__button--next" onclick={slideNext}>
		<svg viewBox="0 0 24 24">
			<path
				d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" />
		</svg>
	</button>
</section>

<style lang="scss">
	.intro {
		position: relative;
		/* .intro__items */
		&__items {
			display: flex;
			overflow: hidden;

			// height: 100vh;
			height: rem(810);
			max-height: 100vh;
		}
		/* .intro__item */
		&__item {
			// padding-top: rem(170);
			padding-bottom: rem(100);
			// padding-left: rem(80);
			// padding-right: rem(80);
			@include adaptiveValue('padding-top', 170, 100, 767, 320, 1);
			@include adaptiveValue('padding-left', 80, 40, 767, 320, 1);
			@include adaptiveValue('padding-right', 80, 40, 767, 320, 1);

			&:nth-child(1) {
				background:
					linear-gradient(to bottom, rgba(#111111, 0.5), rgba(#111111, 0.8)),
					url('/img/home/intro/bg.webp') center / cover no-repeat;
			}
			&:nth-child(2) {
				background:
					linear-gradient(to bottom, rgba(#111111, 0.5), rgba(#111111, 0.8)),
					url('/img/home/intro/bg2.webp') center / cover no-repeat;
			}
			&:nth-child(3) {
				background:
					linear-gradient(to bottom, rgba(#111111, 0.5), rgba(#111111, 0.8)),
					url('/img/home/intro/bg3.webp') center / cover no-repeat;
			}
			&:nth-child(4) {
				background:
					linear-gradient(to bottom, rgba(#111111, 0.5), rgba(#111111, 0.8)),
					url('/img/home/intro/bg4.webp') center / cover no-repeat;
			}
		}

		/* .intro__text */
		&__text {
			max-width: rem(650);

			&--left {
				border-left: rem(5) solid #ffffff;
				padding-left: rem(20);
			}
			&--right {
				margin-left: auto;
				border-right: rem(5) solid #ffffff;
				padding-right: rem(20);
				text-align: right;
			}
			&--center {
				margin: 0 auto;
				text-align: center;
			}
		}
		/* .intro__title */
		&__title {
			color: #ffffff;
			// font-size: rem(48);
			@include adaptiveValue('font-size', 48, 22, 991, 320, 1);
			font-weight: 700;
			line-height: math.div(54, 48);

			margin-bottom: rem(10);
		}
		/* .intro__subtitle */
		&__subtitle {
			color: #ffffff;
			// font-size: rem(24);
			@include adaptiveValue('font-size', 24, 18, 991, 320, 1);
			font-weight: 600;
			line-height: math.div(32, 24);
		}

		/* .intro__button */
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

			/* .intro__button--prev */
			&--prev {
				left: 0;
			}
			/* .intro__button--next */
			&--next {
				right: 0;
				transform: rotate(-180deg) translateY(50%);
			}
		}
	}
</style>
