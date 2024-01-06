import Image from 'next/image';
import { SectionWrapper } from '@/ui/section-wrapper';
import { Heading } from '@/ui/heading';
import AgnieszkaImg from '@/assets/about_me.jpg';

export const AboutMe = () => {
	return (
		<section className="bg-white pt-4">
			<SectionWrapper>
				<Heading variant="black">O mnie</Heading>
				<div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-8 lg:flex-row">
					<div className="mb-8 flex flex-col gap-y-8 leading-8 md:mt-12 lg:w-1/2  lg:text-base">
						<div>
							<h2 className="text-2xl font-bold text-gold">
								Agnieszka Trylińska
							</h2>
							<p className="font-bold">mgr kosmetologii</p>
						</div>
						<p>
							Specjalizuję się w terapiach opóźniających procesy starzenia się
							skóry, redukcji blizn i rozstępów. Moim głównym celem jest
							zachowanie pięknego i zdrowego wyglądu Klientów na dłużej. Nie
							chodzi o to by być wiecznie młodym, lecz by zestarzeć się później
							i piękniej.
						</p>
						<p>
							Nieustannie doskonalę swoje umiejętności uczestnicząc w
							specjalistycznych szkoleniach pod okiem ekspertów kosmetologii i
							medycyny estetycznej, a także licznych konferencjach branżowych,
							co pozwala mi być na bieżąco z najnowszymi trendami.
						</p>
						<p>
							Moją „małą fascynacją” jest chemia kosmetyczna, tak ważna choć
							niedoceniania dziedzina nauki w pracy kosmetologa. Dlatego ogromną
							uwagę przykładam także do preparatów, które stosuję wykonując
							poszczególne zabiegi. Używam wyłącznie produktów innowacyjnych
							marek profesjonalnych o potwierdzonych efektach działania. Swoją
							ofertę zbudowałam m.in. w oparciu o asortyment firmy Rhonda
							Allison, Revitacare czy Mesoestetic. Kieruję się potrzebami
							klientów – nowe innowacje w mojej ofercie często inspirowane są
							potrzebami konkretnych klientów.
						</p>
					</div>
					<Image
						src={AgnieszkaImg}
						width={500}
						height={400}
						alt="Agnieszka Trylińska"
						className="mx-auto object-contain"
					/>
				</div>
			</SectionWrapper>
		</section>
	);
};
