import { Suspense } from 'react';
import { Heading } from '@/ui/heading';

import { SectionWrapper } from '@/ui/section-wrapper';
import { fetchGalleryImages } from '@/api/fetchGalleryImages';
import { ImagesContainer } from '@/components/ui/images-container';

const galleryImages = await fetchGalleryImages();

export const Gallery = () => {
	return (
		<section className="pb-12">
			<SectionWrapper>
				<Heading
					lineColor="border-black"
					text="Galeria"
					textColor="text-black"
				/>
				<Suspense fallback={<div>Loading...</div>}>
					<ImagesContainer galleryImages={galleryImages} />
				</Suspense>
			</SectionWrapper>
		</section>
	);
};
