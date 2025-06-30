import { writable } from 'svelte/store';

// Gallery
export const isGalleryOpen = writable(false);
export const galleryIndex = writable(0);

export const galleryStore = {
	open: (index = 0) => {
		galleryIndex.set(index);
		isGalleryOpen.set(true);
	},
	close: () => isGalleryOpen.set(false)
};

export const galleryImages = [
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

// Modal
export const isModalOpen = writable(false);
export const modalStore = {
	open: () => isModalOpen.set(true),
	close: () => isModalOpen.set(false)
};

// Menu
export const isMenuOpen = writable(false);
export const menuStore = {
	open: () => isMenuOpen.set(true),
	close: () => isMenuOpen.set(false)
};
