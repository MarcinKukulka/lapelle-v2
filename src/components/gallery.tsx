import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/ui/button';
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
				<Heading lineColor="border-black" textColor="text-black">
					Galeria
				</Heading>
				<Suspense fallback={<div>Loading...</div>}>
					<ImagesContainer galleryImages={galleryImages} numImgs={8} />
				</Suspense>

				<Link href="/galeria" className="mt-12 flex justify-center text-lg">
					<Button className="bg-black text-gold" type="button">
						Zobacz więcej
					</Button>
				</Link>
			</SectionWrapper>
		</section>
	);
};
