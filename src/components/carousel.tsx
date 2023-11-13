'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
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
	const [touchPosition, setTouchPosition] = useState<number | null>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		if (e.touches && e.touches.length) {
			setTouchPosition(e.touches[0].clientX);
		}
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchPosition === null || !carouselRef.current) {
			return;
		}

		const currentX = e.touches[0].clientX;
		const difference = touchPosition - currentX;

		if (difference > 5) {
			carouselRef.current.scrollLeft += difference;
		} else if (difference < -5) {
			carouselRef.current.scrollLeft -= -difference;
		}

		setTouchPosition(currentX);
	};

	const handleTouchEnd = () => {
		setTouchPosition(null);
	};

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
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					ref={carouselRef}
					className="scroll-snap-type-mandatory scrollsnap-x-mandatory flex  transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{carouselImages.map((image) => {
						return (
							<Image
								className="scroll-snap-align-start max-h-[70vh] min-w-full object-cover"
								src={image.image}
								alt={image.alt}
								key={image.alt}
							/>
						);
					})}
				</div>
				<div className="absolute bottom-0 flex h-full w-full items-center justify-between px-2 text-gold">
					<button onClick={handlePrevSlide} className={buttonClasses}>
						<ChevronLeft />
					</button>
					<button onClick={handleNextSlide} className={buttonClasses}>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};
