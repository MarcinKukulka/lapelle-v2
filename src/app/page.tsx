import { Carousel } from '@/components/carousel';
import { Gallery } from '@/components/galllery';
import { GoogleMap } from '@/components/google-map';
import { Offers } from '@/components/offers';

export default function Home() {
	return (
		<main>
			<Carousel />
			<Offers />
			<Gallery />
			<GoogleMap />
		</main>
	);
}
