import Image from 'next/image';
import carouselImage1 from '@/assets/carousel/dermobrazja.jpg';
import carouselImage2 from '@/assets/carousel/header1.jpg';
import carouselImage3 from '@/assets/carousel/voucher_podarunkowy.jpg';

const carouselImages = [
	{ image: carouselImage1, url: '', alt: '1' },
	{ image: carouselImage2, url: '', alt: '2' },
	{ image: carouselImage3, url: '', alt: '3' },
];

export const Carousel = () => {
	return (
		<div className="mx-auto">
			<div className="relative overflow-hidden">
				<div className="flex ">
					{carouselImages.map((image) => {
						return (
							<Image
								className="max-h-[70vh] min-w-full object-cover"
								src={image.image}
								alt={image.alt}
								key={image.alt}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
