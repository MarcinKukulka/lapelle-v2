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
		<section className="mx-auto max-w-screen-xl">
			<Heading textColor="text-black" lineColor="border-black" text="Oferta" />
			<div>
				{OFFERS_ACCORDION.map(({ id, title, content }) => {
					return (
						<Accordion type="single" collapsible key={id}>
							<AccordionItem value={title}>
								<AccordionTrigger>{title}</AccordionTrigger>
								<AccordionContent>{content}</AccordionContent>
							</AccordionItem>
						</Accordion>
					);
				})}
			</div>
		</section>
	);
};
