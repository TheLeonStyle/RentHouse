<script>
	import { modalStore } from '$lib/stores';
	import { slide } from 'svelte/transition';

	const handleSubmit = (event) => {
		event.preventDefault();
	};
</script>

<dialog class="modal" onclick={() => modalStore.close()} transition:slide>
	<form
		action=""
		class="modal__form"
		onsubmit={handleSubmit}
		onclick={(event) => event.stopPropagation()}>
		<button class="modal__close" onclick={() => modalStore.close()}>
			<svg viewBox="0 0 50 50">
				<path
					d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
			</svg>
		</button>

		<h2 class="modal__title">Напишите нам</h2>
		<label for="name" class="modal__label">Ваше имя</label>
		<input id="name" type="text" class="modal__input" />
		<label for="contact" class="modal__label">Ваши контакты</label>
		<input id="contact" type="text" class="modal__input" />
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
