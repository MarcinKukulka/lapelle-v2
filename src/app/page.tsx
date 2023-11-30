import { AboutMe } from '@/components/about-me';
import { Carousel } from '@/components/carousel';
import { Contact } from '@/components/contact';
import { Gallery } from '@/components/gallery';
import { GoogleMap } from '@/components/google-map';
import { Offers } from '@/components/offers';
import { ImagesContainer } from '@/components/ui/image-container';

export default function Home() {
	return (
		<main>
			<Carousel />
			<Offers />
			<Gallery>
				<ImagesContainer />
			</Gallery>
			<AboutMe />
			<Contact />
			<GoogleMap />
		</main>
	);
}
