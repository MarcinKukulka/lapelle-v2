import Image from 'next/image';
import { fetchGalleryImages } from '@/api/fetchGalleryImages';

export const ImagesContainer = async () => {
	const galleryImages = await fetchGalleryImages();

	return (
		<div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
			{galleryImages.map(({ src, alt }, index) => {
				return (
					<Image
						className="h-64 rounded-md object-cover transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
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
