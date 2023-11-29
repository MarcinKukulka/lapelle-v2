import { readImagesFromGallery } from '@/lib/utils';

const imagesPath: string = 'src/assets/gallery';
const src = '/../assets/gallery';

type GalleryImages = {
	src: string;
	alt: string;
};

export const GALLERY_IMAGES: GalleryImages[] = readImagesFromGallery(
	imagesPath,
	src,
);
