import fs from 'fs';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const readImagesFromGallery = (folderPath: string, src: string) => {
	const images = fs.readdirSync(folderPath);

	const processedImages = images.map((image: string) => {
		return {
			src: `${src}/${image}`,
			alt: image.replace(/-/g, ' ').replace(/.jpg/g, ''),
			width: 500,
			height: 500,
		};
	});

	return processedImages;
};
