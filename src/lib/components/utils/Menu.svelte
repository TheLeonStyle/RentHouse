<script>
	import { menuStore, isMenuOpen } from '$lib/stores';
	import { fade, fly, scale, slide } from 'svelte/transition';
</script>

<section class="menu" class:active={$isMenuOpen} onclick={() => menuStore.close()}>
	<div
		class="menu__content"
		class:active={$isMenuOpen}
		onclick={(event) => event.stopPropagation()}>
		<nav class="menu__nav">
			<button class="menu__button">Описание</button>
			<button class="menu__button">Фотогалерея</button>
			<button class="menu__button">Контакты</button>
		</nav>

		<nav class="menu__nav menu__nav--bottom">
			<a href="https://telegram.org" target="_blank" class="menu__link">
				<div class="menu__icon">
					<svg width="20" height="17.446289" viewBox="0 0 20 17.4463">
						<path
							d="M0.35 8.37L4.94 10.08L6.74 15.85C6.81 16.24 7.28 16.32 7.59 16.08L10.17 13.98C10.4 13.75 10.79 13.75 11.1 13.98L15.7 17.33C16.01 17.57 16.48 17.41 16.56 17.02L19.98 0.65C20.06 0.26 19.67 -0.13 19.28 0.03L0.35 7.36C-0.12 7.51 -0.12 8.21 0.35 8.37ZM6.5 9.23L15.54 3.69C15.7 3.62 15.85 3.85 15.7 3.93L8.29 10.86C8.06 11.1 7.83 11.41 7.83 11.8L7.59 13.67C7.59 13.9 7.2 13.98 7.13 13.67L6.19 10.24C5.96 9.85 6.11 9.38 6.5 9.23Z"
							fill="#FFFFFF" />
					</svg>
				</div>
			</a>
			<a href="https://whatsapp.com" target="_blank" class="menu__link">
				<div class="menu__icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
						<path
							d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
							fill="#FFFFFF">
						</path>
					</svg>
				</div>
			</a>
			<a href="tel:+79504444544" target="_blank" class="menu__link">
				<div class="menu__icon">
					<svg width="16.258301" height="16.251770" viewBox="0 0 16.2583 16.2518">
						<path
							d="M10.83 11.55L12.23 10.14C12.42 9.96 12.66 9.83 12.92 9.78C13.18 9.72 13.45 9.75 13.7 9.85L15.4 10.53C15.65 10.63 15.87 10.8 16.02 11.02C16.17 11.25 16.25 11.51 16.25 11.78L16.25 14.9C16.25 15.08 16.21 15.27 16.14 15.43C16.07 15.6 15.96 15.75 15.83 15.88C15.69 16 15.54 16.1 15.37 16.16C15.19 16.23 15.01 16.25 14.83 16.25C2.87 15.5 0.46 5.38 0 1.5C-0.02 1.31 0 1.12 0.06 0.94C0.12 0.75 0.22 0.59 0.34 0.44C0.47 0.3 0.63 0.19 0.8 0.11C0.98 0.03 1.17 -0.01 1.36 3.05e-5L4.38 3.05e-5C4.65 0 4.91 0.08 5.13 0.23C5.36 0.38 5.53 0.59 5.63 0.85L6.31 2.55C6.41 2.8 6.44 3.07 6.38 3.33C6.33 3.59 6.2 3.83 6.02 4.01L4.62 5.41C4.62 5.41 5.42 10.87 10.83 11.55Z"
							fill="#FFFFFF" />
					</svg>
				</div>
			</a>
			<button class="menu__button--feedback">Заказать звонок</button>
		</nav>
	</div>
</section>

<style lang="scss">
	.menu {
		position: fixed;
		top: 0;
		left: 100%;
		z-index: 12;
		width: 100%;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: 0.5);
		transition: left 0.3s ease 0s;
		&.active {
			left: 0;
		}

		/* .menu__content */
		&__content {
			position: fixed;
			top: 0;
			right: -100%;
			z-index: 12;
			width: rem(300);
			height: 100%;
			// max-height: 100vh;
			overflow: auto;

			background: linear-gradient(87deg, #2b7af1 0.269%, #276ed8 100%);

			transition: right 0.3s ease 0s;
			&.active {
				right: 0;
			}
		}
		/* .menu__nav */
		&__nav {
			margin-bottom: rem(30);

			&--bottom {
				display: grid;
				grid-template-columns: repeat(3, auto);
				gap: rem(10);
				justify-items: center;
				padding: rem(15);
			}
		}
		/* .menu__button */
		&__button {
			color: #ffffff;
			font-size: rem(18);
			font-weight: 600;
			line-height: math.div(20, 18);
			padding: rem(15) rem(20);
			width: 100%;
			text-align: left;
			/* .menu__button--feedback */
			&--feedback {
				grid-column: 1/4;
				color: #ffffff;
				font-size: rem(18);
				font-weight: 600;
				line-height: math.div(20, 16);

				width: 100%;
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
		/* .menu__icon */
		&__icon {
			svg {
				width: rem(30);
				height: rem(30);
			}
		}
		/* .menu__link */
		&__link {
		}
	}
</style>
