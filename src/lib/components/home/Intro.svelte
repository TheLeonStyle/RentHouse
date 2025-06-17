<section class="intro">
	<div class="intro__container">
		<div class="intro__content">
			<h1 class="intro__title">Аренда дома в Москве</h1>
			<p class="intro__subtitle">На длительный срок или посуточно</p>
			<button class="intro__button">Заказать звонок</button>
		</div>

		<div class="intro__image">
			<img
				src="https://domnareke30.ru/wp-content/uploads/2024/05/dom-snaruzhi-4-1.jpg"
				alt=""
				loading="lazy" />
		</div>
	</div>
</section>

<style lang="scss">
	.intro {
		/* .intro__container */
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: rem(40);

			@media (max-width: $mobile) {
				flex-direction: column;
				align-items: start;
				gap: rem(20);

				position: relative;
				overflow: hidden;
			}
		}
		/* .intro__content */
		&__content {
			flex: 1 1 50%;
			@media (max-width: $mobile) {
				width: 100%;
				text-align: center;

				padding-top: rem(150);
				padding-bottom: rem(150);
			}
		}
		/* .intro__title */
		&__title {
			color: #111111;
			// font-size: rem(40);
			@include adaptiveValue('font-size', 40, 26, 767, 320, 1);
			font-weight: 700;
			line-height: math.div(50, 40);

			margin-bottom: rem(20);

			@media (max-width: $mobile) {
				color: #2b7af1;
			}
		}
		/* .intro__subtitle */
		&__subtitle {
			color: #111111;
			// font-size: rem(24);
			@include adaptiveValue('font-size', 24, 20, 767, 320, 1);
			line-height: math.div(32, 24);

			// margin-bottom: rem(50);
			@include adaptiveValue('margin-bottom', 50, 20, 991, 767, 1);

			@media (max-width: $mobile) {
				color: #2b7af1;
			}
		}
		/* .intro__button */
		&__button {
			color: #ffffff;
			@include adaptiveValue('font-size', 18, 16, 767, 320, 1);

			font-weight: 600;
			line-height: math.div(22, 18);

			border-radius: rem(20);
			box-shadow: 0 rem(10) rem(20) 0 rgba(255, 122, 0, 0.2);
			background: linear-gradient(87deg, rgb(255, 122, 0) 0.07%, rgb(255, 176, 57) 100%);
			padding: rem(10) rem(30);
		}
		/* .intro__image */
		&__image {
			flex: 1 1 100%;
			width: 100%;
			height: rem(473);

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			@media (max-width: $mobile) {
				height: 100%;
				position: absolute;
				left: 0;
				right: 0;
				z-index: -1;
				opacity: 0.4;
			}
		}
	}
</style>
