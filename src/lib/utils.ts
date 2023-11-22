import fs from 'fs';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const readImagesFromGallery = (folderPath: string) => {
	const images = fs.readdirSync(folderPath);

	const processedImages = images.map((image: string) => {
		return {
			src: `/../assets/gallery/${image}`,
			alt: 'Zdjęcie z galerii',
		};
	});

	return processedImages;
};
