import { Heading } from '@/ui/heading';

import { SectionWrapper } from '@/ui/section-wrapper';
import { fetchGalleryImages } from '@/api/fetchGalleryImages';
import { ImagesContainer } from '@/ui/image-container';

export const Gallery = async () => {
	const galleryImages = await fetchGalleryImages();

	return (
		<SectionWrapper>
			<Heading lineColor="border-black" text="Galeria" textColor="text-black" />
			<ImagesContainer galleryImages={galleryImages} />
		</SectionWrapper>
	);
};
