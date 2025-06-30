<script>
	import { slide } from 'svelte/transition';

	let contactError = $state(''); // Сообщение об ошибке валидаций контактов
	let isRequestSent = $state(false); // Показать/скрыть сообщение после отправки формы

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const { name, contact, message } = Object.fromEntries(formData);

		// Валидация контактов
		if (!contact.trim()) {
			contactError = 'Введите контактные данные';
		} else if (contact.trim().length < 5) {
			contactError = 'Контакты должны быть не короче 5 символов';
		} else {
			contactError = '';
		}

		if (contactError) return; // Если есть ошибка валидации контактов - выходим

		fetch('/api/telegram', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, contact, message })
		});

		isRequestSent = true; // Показываем сообщение после отправки формы

		setTimeout(() => {
			isRequestSent = false;
		}, 5000);
	};
</script>

<section class="feedback">
	<div class="feedback__container">
		<form action="" class="feedback__form" onsubmit={handleSubmit}>
			<h2 class="feedback__title text">Напишите нам</h2>
			<input name="name" type="text" placeholder="Имя" class="feedback__input" />
			<input name="contact" type="tel" placeholder="Телефон" class="feedback__input" />
			<!-- prettier-ignore -->
			<textarea name="message" placeholder="Ваше сообщение" id="" class="feedback__textarea" rows="6"></textarea>
			{#if contactError}
				<label
					class="feedback__label feedback__label-error"
					role="alert"
					aria-live="assertive"
					transition:slide>
					{contactError}
				</label>
			{/if}
			{#if isRequestSent}
				<label
					class="feedback__label feedback__label-success"
					role="alert"
					aria-live="polite"
					transition:slide>
					Заявка отправлена
				</label>
			{/if}
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
			box-shadow: 0 rem(5) rem(10) 0 rgba(#111111, 0.3);
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

			border: rem(2) solid rgba(17, 17, 17, 0.5);
			border-radius: rem(10);
			padding: rem(10) rem(20);
			margin-bottom: rem(15);
			transition: border-color 0.3s ease 0s;

			&:focus {
				border-color: #2b7af1;
			}
		}
		/* .feedback__input */
		&__input {
		}
		/* .feedback__textarea */
		&__textarea {
			resize: none;
		}
		/* .feedback__label */
		&__label {
			font-weight: 600;
			line-height: math.div(22, 16);
			margin-bottom: rem(10);

			&-error {
				color: #be0000;
			}
			&-success {
				color: #02cc02;
			}
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
			transition:
				box-shadow 0.3s ease 0s,
				opacity 0.3s ease 0s;

			&:hover {
				box-shadow: 0 rem(5) rem(20) 0 rgba(255, 122, 0, 0.4);
				opacity: 0.9;
			}
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
