import { AboutMe } from '@/components/about-me';
import { Carousel } from '@/components/carousel';
import { Contact } from '@/components/contact';
import { Gallery } from '@/components/galllery';
import { GoogleMap } from '@/components/google-map';
import { Offers } from '@/components/offers';

export default function Home() {
	return (
		<main>
			<Carousel />
			<Offers />
			<Gallery />
			<AboutMe />
			<Contact />
			<GoogleMap />
		</main>
	);
}
