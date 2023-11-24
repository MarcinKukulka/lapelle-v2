import Image from 'next/image';
import { Heading } from '@/ui/heading';
import { readImagesFromGallery } from '@/lib/utils';

const imagesPath: string = 'src/assets/gallery';
const src = '/../assets/gallery';
const alt = 'Zdjęcie z galerii';

type GalleryImages = {
	src: string;
	alt: string;
};

const images: GalleryImages[] = readImagesFromGallery(imagesPath, src, alt);

export const Gallery = () => {
	return (
		<section className="mx-auto my-8 max-w-screen-xl">
			<Heading lineColor="border-black" text="Galeria" textColor="text-black" />
			<div className="mt-8 grid grid-cols-1 justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
				{images.map(({ src, alt }, index) => {
					return (
						<Image
							className="h-64 object-cover transition-transform duration-300 hover:scale-110"
							height={200}
							width={300}
							src={src}
							key={index}
							alt={alt}
						/>
					);
				})}
			</div>
		</section>
	);
};
