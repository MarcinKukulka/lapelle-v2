import Image from 'next/image';
import { LightboxTrigger } from '../lightbox-trigger';
import { type GalleryImages } from '@/api/fetchGalleryImages';

export const ImagesContainer = ({
	galleryImages,
	numImgs = galleryImages.length,
}: {
	galleryImages: GalleryImages[];
	numImgs?: number;
}) => {
	return (
		<div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
			{galleryImages.slice(0, numImgs).map(({ src, alt }, index) => {
				return (
					<LightboxTrigger index={index} key={index} slides={galleryImages}>
						<Image
							className="h-64 rounded-md object-cover transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
							width={400}
							height={400}
							src={src}
							alt={alt}
						/>
					</LightboxTrigger>
				);
			})}
		</div>
	);
};
