// import fs from 'fs';
import fs from 'fs/promises';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const readImagesFromGallery = async (
	folderPath: string,
	src: string,
) => {
	const images = await fs.readdir(folderPath);

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
