import { Heading } from '@/ui/heading';

import { SectionWrapper } from '@/ui/section-wrapper';
import { fetchGalleryImages } from '@/api/fetchGalleryImages';
import { ImagesContainer } from '@/components/ui/images-container';

export const Gallery = async () => {
	const galleryImages = await fetchGalleryImages();

	return (
		<section className="pb-12">
			<SectionWrapper>
				<Heading
					lineColor="border-black"
					text="Galeria"
					textColor="text-black"
				/>
				<ImagesContainer galleryImages={galleryImages} />
			</SectionWrapper>
		</section>
	);
};
