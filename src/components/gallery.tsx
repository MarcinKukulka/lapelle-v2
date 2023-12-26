import { Suspense } from 'react';
import { Heading } from '@/ui/heading';

import { SectionWrapper } from '@/ui/section-wrapper';
import { type GalleryImages } from '@/api/fetchGalleryImages';
import { ImagesContainer } from '@/components/ui/images-container';
import { executeGraphql } from '@/api/grapqhlApi';
import { GalleryDocument } from '@/gql/graphql';

export const Gallery = async () => {
	const fetchGalleryImagesFromHygraph = await executeGraphql(GalleryDocument);
	const galleryImages: GalleryImages[] =
		fetchGalleryImagesFromHygraph.galleries[0].image.map((image) => ({
			src: image.url,
			alt: image.fileName,
		}));

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
