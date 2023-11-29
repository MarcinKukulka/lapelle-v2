import { readImagesFromGallery } from '@/lib/utils';

const imagesPath: string = 'src/assets/gallery';
const src = '/../assets/gallery';

type GalleryImages = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export async function fetchGalleryImages() {
	const GALLERY_IMAGES: GalleryImages[] = await readImagesFromGallery(
		imagesPath,
		src,
	);
	return GALLERY_IMAGES;
}
