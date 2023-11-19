import {
	Accordion,
	AccordionContent,
	AccordionTrigger,
	AccordionItem,
} from '@/ui/accordion';
import { Heading } from '@/ui/heading';

const OFFERS_ACCORDION = [
	{
		id: 1,
		title: 'Stylizacja brwi i rzęs',
		content:
			'Dzięki zabiegom stylizacji brwi i rzęs Twoje oczy zostaną idealnie podkreślone!	Odpowiednio dopasowany kształt brwi i rzęs wpływa na upiększenie i poprawę rysów	Twojej twarzy. To najlepsze co możesz zrobić dla swojego wizerunku zewnętrznego. Dlatego nie zwlekaj i umów się już dziś na bezpłatną konsultację i oddaj swoje brwi i rzęsy ręce profesjonalisty!',
	},
	{
		id: 2,
		title: 'Pielęgnacja dłoni',
		content:
			'Dłonie są Twoją wizytówką, warto o nie zadbać. Dlatego w La Pelle znajdziesz nietylko pielęgnację i stylizacje paznokci, ale również intensywne zabiegi odmładzające, nawilżające i rozjaśniające dłoni. Każdy zabieg pielęgnacyjnypoprzedza bezpłatna konsultacja kosmetologa, podczas której dobrane zostają najbardziej optymalne formy terapii.',
	},
];

export const Offers = () => {
	return (
		<section className=" bg-white py-8">
			<div className="mx-auto max-w-screen-xl">
				<Heading
					textColor="text-black"
					lineColor="border-black"
					text="Oferta"
				/>
				<div className="mt-10 flex w-full flex-col items-stretch px-12 md:flex-row md:justify-between md:gap-x-24">
					<div className="gap-y-4 md:w-2/5">
						<Accordion type="single" collapsible>
							{OFFERS_ACCORDION.map(({ id, title, content }) => {
								return (
									<AccordionItem
										key={id}
										className="mb-3 border border-black/20 px-3 leading-8 hover:bg-gold/60 data-[state=open]:bg-gold/40"
										value={id.toString()}
									>
										<AccordionTrigger className="font-semibold hover:no-underline data-[state=open]:mb-3 data-[state=open]:border-b data-[state=open]:border-b-black/30 ">
											{title}
										</AccordionTrigger>
										<AccordionContent>{content}</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</div>
					<div className="leading-8 md:w-3/5">
						<h1 className="mb-4 text-2xl font-bold text-gold">
							Salon kosmetyczny La Pelle
						</h1>
						<p className="mb-4 md:text-lg ">
							W ofercie gabinetu kosmetologicznego{' '}
							<strong>
								La Pelle Nowoczesna Kosmetologia Agnieszka Trylińska
							</strong>{' '}
							znajdziesz zabiegi poprawiające wygląd skóry oraz terapie
							likwidujące takie defekty jak zaskórniki, trądzik, przebarwienia,
							zmarszczki, blizny, rozstępy, cellulit czy wypadające włosy.
							Szeroki wybór zabiegów sprawia, że w <strong>La Pelle</strong>{' '}
							wykonasz zarówno zabiegi podstawowe obejmujące stylizacje brwi i
							rzęs, pielęgnacje stóp i dłoni jak również obecnie najbardziej
							innowacyjne i zarazem najskuteczniejsze zabiegi na rynku
							kosmetologicznym takie jak mezoterapia igłowa, mikroigłowa,
							lipoliza iniekcyjna czy stymulatory tkankowe. Należy wspomnieć
							również o szerokiej gamie terapii oczyszczająch oraz
							pielęgnacyjnych wykorzystujących mikrodermabrazje, oxybrazje,
							peelingi chemiczne czy mezoterapie bezigłową. Zabiegi wykonuje na
							skutecznych i nowoczesnych urządzeniach, a wszystkie preparaty
							posiadają certyfikaty medyczne. Wszystko to z myślą o{' '}
							<strong>Twoim zdrowiu i bezpieczeństwie</strong>.
						</p>
						<p className="md:text-lg">
							W La Pelle znajdziesz wszystko co najlepsze dla Twojej skóry!
							Przyjdź już dziś i skorzystaj z{' '}
							<span className="font-semibold">darmowej konsultacji </span>
							przeprowadzonej przez wykwalifikowanego kosmetologa. Znajdziesz
							mnie w <strong>Tarnowie przy ulicy Bema 12</strong>, w salonie
							fryzjerskim Studio Retro.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
