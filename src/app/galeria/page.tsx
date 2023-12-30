import { type GalleryImages } from '@/api/fetchGalleryImages';
import { executeGraphql } from '@/api/grapqhlApi';
import { Heading } from '@/components/ui/heading';
import { ImagesContainer } from '@/components/ui/images-container';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { GalleryDocument } from '@/gql/graphql';

export default async function Galeria() {
	const fetchGalleryImagesFromHygraph = await executeGraphql(GalleryDocument);
	const galleryImages: GalleryImages[] =
		fetchGalleryImagesFromHygraph.galleries[0].image.map((image) => ({
			src: image.url,
			alt: image.fileName,
		}));
	return (
		<SectionWrapper className="min-h-screen pb-12">
			<Heading lineColor="border-black" textColor="text-black">
				Galeria
			</Heading>
			<ImagesContainer galleryImages={galleryImages} />
		</SectionWrapper>
	);
}
