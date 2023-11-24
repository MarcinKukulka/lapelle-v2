import fs from 'fs';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const readImagesFromGallery = (
	folderPath: string,
	src: string,
	alt: string,
) => {
	const images = fs.readdirSync(folderPath);

	const processedImages = images.map((image: string) => {
		return {
			src: `${src}/${image}`,
			alt,
		};
	});

	return processedImages;
};
