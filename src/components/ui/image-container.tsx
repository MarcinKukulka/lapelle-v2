import Image from 'next/image';
// import { GALLERY_IMAGES } from '../../api/fetchGalleryImages';
import { readImagesFromGallery } from '@/lib/utils';

type GalleryImages = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

type ImagesContainerProps = {
	galleryImages: GalleryImages[];
};
export async function getStaticProps() {
	const imagesPath: string = 'src/assets/gallery';
	const src = '/../assets/gallery';

	const galleryImages: GalleryImages[] = readImagesFromGallery(imagesPath, src);

	return {
		props: {
			galleryImages,
		},
	};
}

export const ImagesContainer = ({ galleryImages }: ImagesContainerProps) => {
	return (
		<div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
			{galleryImages.map(({ src, alt }, index) => {
				return (
					<Image
						className="h-64 rounded-md object-cover transition-transform duration-300 hover:scale-110"
						width={400}
						height={400}
						src={src}
						key={index}
						alt={alt}
					/>
				);
			})}
		</div>
	);
};
