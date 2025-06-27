import { writable } from "svelte/store";

export const isGalleryOpen = writable(false);
export const galleryIndex = writable(0);

export const galleryStore = {
  open: (idx = 0) => {
    galleryIndex.set(idx);
    isGalleryOpen.set(true);
  },
  close: () => isGalleryOpen.set(false)
};
