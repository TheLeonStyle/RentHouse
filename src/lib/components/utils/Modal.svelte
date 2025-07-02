<script>
	import { modalStore } from '$lib/stores';
	import { slide } from 'svelte/transition';

	let contactError = $state(''); // Сообщение об ошибке валидаций контактов
	let isRequestSent = $state(false); // Показать/скрыть сообщение после отправки формы

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const { name, contact } = Object.fromEntries(formData);

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
			body: JSON.stringify({ name, contact })
		});

		isRequestSent = true; // Показываем сообщение после отправки формы

		setTimeout(() => {
			isRequestSent = false;
		}, 5000);
	};
</script>

<dialog class="modal" onclick={() => modalStore.close()} tabindex="-1" transition:slide>
	<form
		action=""
		class="modal__form"
		onsubmit={handleSubmit}
		onclick={(event) => event.stopPropagation()}>
		<button type="button" class="modal__close" onclick={() => modalStore.close()}>
			<svg viewBox="0 0 50 50">
				<path
					d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
			</svg>
		</button>

		<h2 class="modal__title">Напишите нам</h2>
		<label for="name" class="modal__label">Ваше имя</label>
		<input id="name" name="name" type="text" class="modal__input" />
		<label for="contact" class="modal__label">Ваши контакты</label>
		<input id="contact" name="contact" type="text" class="modal__input" required />
		{#if contactError}
			<label
				class="modal__label modal__label-error"
				role="alert"
				aria-live="assertive"
				transition:slide>
				{contactError}
			</label>
		{/if}
		{#if isRequestSent}
			<label
				class="modal__label modal__label-success"
				role="alert"
				aria-live="polite"
				transition:slide>
				Заявка отправлена
			</label>
		{/if}
		<button class="modal__button">Отправить</button>
	</form>
</dialog>

<style lang="scss">
	.modal {
		display: flex;
		justify-content: center;
		align-items: center;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 11;
		width: 100%;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: 0.5);

		padding: rem(15);
		overflow: auto;
		/* .modal__form */
		&__form {
			display: flex;
			flex-direction: column;

			max-width: rem(420);
			width: 100%;
			border-radius: rem(10);
			background: linear-gradient(87deg, #2b7af1 0.269%, #276ed8 100%);

			box-shadow: 0 rem(5) rem(10) 0 rgba(#111111, 0.3);

			padding: rem(50) rem(20) rem(40) rem(20);
			position: relative;
		}
		/* .modal__close */
		&__close {
			position: absolute;
			top: rem(20);
			right: rem(20);
			width: rem(30);
			height: rem(30);
			svg {
				width: 100%;
				height: 100%;
				fill: #ffffff;
			}
		}
		/* .modal__title */
		&__title {
			color: #ffffff;
			font-size: rem(24);
			font-weight: 700;
			line-height: math.div(28, 24);
			text-align: center;
			margin-bottom: rem(20);
		}
		/* .modal__label */
		&__label {
			color: #ffffff;
			font-weight: 600;
			line-height: math.div(22, 16);
			margin-bottom: rem(5);

			&-error {
				color: #be0000;
			}
			&-success {
				color: #02cc02;
			}
		}
		/* .modal__input */
		&__input {
			color: #111111;
			font-size: inherit;
			line-height: math.div(22, 16);

			border: rem(2) solid rgba(17, 17, 17, 0.5);
			border-radius: rem(10);
			padding: rem(10);
			margin-bottom: rem(15);
			transition: border-color 0.3s ease 0s;

			&:focus {
				border-color: #f1bb2b;
			}
		}
		/* .modal__button */
		&__button {
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
	}
</style>
