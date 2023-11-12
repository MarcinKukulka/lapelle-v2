import { Carousel } from '@/components/carousel';
import { GoogleMap } from '@/components/google-map';

export default function Home() {
	return (
		<main className="absolute top-20 flex flex-col">
			<Carousel />
			<GoogleMap />
		</main>
	);
}
