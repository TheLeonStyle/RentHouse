<section class="feedback">
	<div class="feedback__container">
		<form action="" class="feedback__form">
			<h2 class="feedback__title text">Напишите нам</h2>
			<input name="name" type="text" placeholder="Имя" class="feedback__input" />
			<input name="phone" type="tel" placeholder="Телефон" class="feedback__input" />
			<!-- prettier-ignore -->
			<textarea name="message" placeholder="Ваше сообщение" id="" class="feedback__textarea" rows="6"></textarea>
			<button class="feedback__button">Отправить</button>
		</form>

		<div class="feedback__content">
			<p class="feedback__text">
				Дорогой гость, если у тебя есть какие-то пожелания или притензии по улучшению качества
				обслуживания или просто хочешь оставить свой комментарий, то заполни форму. Мы обязательно
				ответим тебе, или опубликуем его на нашем сайте.
			</p>
			<h3 class="feedback__name">Татьяна Вячеславовна</h3>
			<p class="feedback__role">Директор гостиницы</p>
		</div>
	</div>
</section>

<style lang="scss">
	.feedback {
		position: relative;
		top: rem(100);
		@media (max-width: $tablet) {
			position: static;
			padding-top: rem(50);
			@include adaptiveValue('padding-bottom', 50, 30, 991, 320, 1);
		}

		/* .feedback__container */
		&__container {
			display: flex;
			gap: rem(50);
			@media (max-width: $mobile) {
				flex-direction: column-reverse;
				gap: rem(20);
			}
		}
		/* .feedback__form */
		&__form {
			flex: 0 0 rem(400);

			display: flex;
			flex-direction: column;

			border-radius: rem(10);
			background-color: #ffffff;
			// padding: rem(40) rem(50);

			@include adaptiveValue('padding-top', 40, 20, 767, 320, 1);
			@include adaptiveValue('padding-bottom', 40, 20, 767, 320, 1);
			@include adaptiveValue('padding-left', 50, 20, 767, 320, 1);
			@include adaptiveValue('padding-right', 50, 20, 767, 320, 1);

			@media (max-width: $mobileSmall) {
				flex: auto;
			}
		}
		/* .feedback__title */
		&__title {
			// color: #2b7af1;
			// font-size: rem(36);
			// font-weight: 700;
			// line-height: math.div(44, 36);

			margin-bottom: rem(25);
		}
		&__textarea,
		&__input {
			color: #111111;
			font-size: inherit;
			line-height: math.div(22, 16);

			border: rem(1) solid rgba(17, 17, 17, 0.5);
			border-radius: rem(10);
			padding: rem(10) rem(20);
			margin-bottom: rem(15);
		}
		/* .feedback__input */
		&__input {
		}
		/* .feedback__textarea */
		&__textarea {
			resize: none;
		}
		/* .feedback__button */
		&__button {
			align-self: center;
			color: #ffffff;
			font-size: inherit;
			font-weight: 600;
			line-height: math.div(20, 16);

			border-radius: rem(25);
			box-shadow: 0 rem(10) rem(20) 0 rgba(255, 122, 0, 0.2);
			background: linear-gradient(87deg, rgb(255, 122, 0) 0.269%, rgb(255, 176, 57) 100%);
			padding: rem(15) rem(30);
		}
		/* .feedback__content */
		&__content {
		}
		/* .feedback__text */
		&__text {
			color: #111111;
			font-size: rem(18);
			line-height: 140%;

			margin-bottom: rem(20);
		}
		/* .feedback__name */
		&__name {
			color: #2b7af1;
			font-size: rem(18);
			font-weight: 700;
			line-height: math.div(28, 18);
		}
		/* .feedback__role */
		&__role {
			color: #111111;
			line-height: math.div(26, 16);
		}
	}
</style>
