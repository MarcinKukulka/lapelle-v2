import Image from 'next/image';
import { fetchGalleryImages } from '@/api/fetchGalleryImages';
// import { type MouseEventHandler } from 'react';
// import { GALLERY_IMAGES } from '../../api/fetchGalleryImages';
// import { readImagesFromGallery } from '@/lib/utils';
// import { fetchGalleryImages } from '@/api/fetchGalleryImages';

// type GalleryImages = {
// 	src: string;
// 	alt: string;
// 	width: number;
// 	height: number;
// };

// export async function generateStaticParams() {
// 	const imagesPath: string = 'src/assets/gallery';
// 	const src: string = '/../assets/gallery';

// 	const galleryImages = readImagesFromGallery(imagesPath, src);
// 	console.log(galleryImages);
// 	return galleryImages;
// }

export const ImagesContainer = async () => {
	const galleryImages = await fetchGalleryImages();
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
