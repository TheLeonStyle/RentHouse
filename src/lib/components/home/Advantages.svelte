<section class="advantages">
	<div class="advantages__container">
		<div class="advantages__content">
			<h2 class="advantages__text text" data-aos="fade-right">Почему выбирают нас</h2>

			<ul class="advantages__items">
				<li class="advantages__item">
					<h3 class="advantages__title">1. Уникальное расположение</h3>
					<p class="advantages__subtitle">
						Гостевой дом находится на берегу реки Царев в черте города Астрахани — идеальное
						сочетание природы и близости к центру
					</p>
				</li>
				<li class="advantages__item">
					<h3 class="advantages__title">2. Полное оснащение</h3>
					<p class="advantages__subtitle">
						Три этажа комфорта: кухня с техникой и посудой,5 уютных спальных комнат,душевые и
						джакузи,спорт зал в доме,камин и зона кинотеатра.
					</p>
				</li>
				<li class="advantages__item">
					<h3 class="advantages__title">3. Комфорт и забота</h3>
					<p class="advantages__subtitle">
						Гостям предоставляются халаты, тапочки, полотенца, косметические средства, чай, кофе,
						инструменты для шашлыка и барбекю ,рыболовные принадлежности и многое другое — абсолютно
						бесплатно!
					</p>
				</li>
				<li class="advantages__item">
					<h3 class="advantages__title">4. Комфортабельный отдых и индивидуальный подход</h3>
					<p class="advantages__subtitle">
						Бассейн с водопадом, баня с веником и медом, летняя кухня на территории, закрытая
						беседка с климатической техникой, мангальная зона, прокат сапбордов и скоростного
						катера,рыбалка,конные прогулки и прогулки по лотосовым полям
					</p>
				</li>
			</ul>
		</div>

		<div class="advantages__videos">
			<div class="advantages__video">
				<iframe
					width="720"
					height="405"
					src="https://rutube.ru/play/embed/185e98667d217609be24e33116cc9c98/?p=zXnyJcYELeyPffcRIW9RJg"
					frameBorder="0"
					allow="clipboard-write; autoplay"
					allowFullScreen>
				</iframe>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.advantages {
		@include adaptiveValue('padding-top', 40, 20, 767, 320, 1);
		@include adaptiveValue('padding-bottom', 40, 20, 767, 320, 1);

		/* .advantages__container */
		&__container {
		}
		/* .advantages__content */
		&__content {
			display: flex;
			gap: rem(20);

			margin-bottom: rem(30);

			@media (max-width: $mobile) {
				flex-direction: column;
			}
		}
		/* .advantages__text */
		&__text {
		}
		/* .advantages__items */
		&__items {
			flex: 0 1 100%;

			display: grid;
			grid-template-columns: repeat(2, 1fr);
			// display: flex;
			// flex-wrap: wrap;
			gap: rem(20);

			@media (max-width: $mobile) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
		/* .advantages__item */
		&__item {
			// flex: 1 1 calc(50% - rem(10));
		}
		/* .advantages__title */
		&__title {
			color: #111111;
			// font-size: rem(20);
			@include adaptiveValue('font-size', 20, 18, 767, 320, 1);
			font-weight: 600;
			line-height: math.div(26, 20);

			margin-bottom: rem(10);
		}
		/* .advantages__subtitle */
		&__subtitle {
			color: #111111;
			// font-size: rem(18);
			@include adaptiveValue('font-size', 18, 16, 767, 320, 1);
			line-height: math.div(26, 18);
		}

		/* .advantages__videos */
		&__videos {
			display: flex;
			// justify-content: space-between;
			justify-content: center;
			gap: rem(20);

			@media (max-width: $mobile) {
				flex-direction: column;
			}
		}
		/* .advantages__video */
		&__video {
			// flex: 0 1 33.333%;
			flex: 0 1 rem(700);
			height: rem(393);
			iframe {
				width: 100%;
				height: 100%;
			}

			@media (max-width: $mobile) {
				flex: 0 1 rem(320);
			}
		}
	}
</style>
