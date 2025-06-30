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
