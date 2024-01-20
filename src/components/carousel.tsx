'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import carouselImage1 from '@/assets/carousel/dermobrazja.jpg';
import carouselImage2 from '@/assets/carousel/header1.jpg';
import carouselImage3 from '@/assets/carousel/voucher_podarunkowy.jpg';

const carouselImages = [
	{ image: carouselImage1, url: '', alt: '1' },
	{ image: carouselImage2, url: '', alt: '2' },
	{ image: carouselImage3, url: '', alt: '3' },
];

export const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentSlide === carouselImages.length - 1) {
				setCurrentSlide(0);
			} else {
				setCurrentSlide(currentSlide + 1);
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	const handleNextSlide = () => {
		if (currentSlide === carouselImages.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const handlePrevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(carouselImages.length - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	const buttonClasses =
		'p-2 bg-black/40 rounded-full transition-colors hover:bg-black';

	return (
		<div className="mx-auto">
			<div className="relative overflow-hidden">
				<div
					className="flex snap-x snap-mandatory transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{carouselImages.map((image) => {
						return (
							<Image
								priority={image === carouselImages[0] ? true : false}
								className="max-h-[70vh] min-w-full snap-center snap-always object-cover"
								src={image.image}
								alt={image.alt}
								key={image.alt}
							/>
						);
					})}
				</div>
				<div className="absolute bottom-0 flex h-full w-full items-center justify-between px-2 text-gold">
					<button
						aria-label="Previous slide"
						onClick={handlePrevSlide}
						className={buttonClasses}
					>
						<ChevronLeft />
					</button>
					<button
						aria-label="Next slide"
						onClick={handleNextSlide}
						className={buttonClasses}
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};
