import Image from 'next/image';
import { Heading } from '@/ui/heading';
import Image1 from '@/assets/gallery/galeria1-desktop.jpg';
import Image2 from '@/assets/gallery/galeria2-desktop.jpg';
import Image3 from '@/assets/gallery/galeria3-desktop.jpg';
import Image4 from '@/assets/gallery/galeria4-desktop.jpg';
import Image5 from '@/assets/gallery/galeria5-desktop.jpg';
import Image6 from '@/assets/gallery/galeria6-desktop.jpg';
import Image7 from '@/assets/gallery/galeria7-desktop.jpg';
import Image8 from '@/assets/gallery/galeria8-desktop.jpg';
import Image9 from '@/assets/gallery/galeria9-desktop.jpg';

const IMAGES = [
	Image1,
	Image2,
	Image3,
	Image4,
	Image5,
	Image6,
	Image7,
	Image8,
	Image9,
];

export const Gallery = () => {
	return (
		<section className="mx-auto my-8 max-w-screen-xl">
			<Heading lineColor="border-black" text="Galeria" textColor="text-black" />
			<div className="mt-8 grid grid-flow-row-dense grid-cols-1 justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
				{IMAGES.map((image, index) => {
					return (
						<Image
							className="h-64 object-cover transition-transform duration-300 hover:scale-110"
							height={200}
							width={300}
							src={image}
							key={index}
							alt="Zdjęcie z galerii"
						/>
					);
				})}
			</div>
		</section>
	);
};
