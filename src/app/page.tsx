import { GoogleMap } from '@/components/google-map';
import { Heading } from '@/components/ui/heading';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Heading text="Oferta" color="white" />
			<GoogleMap />
		</main>
	);
}
