import { SectionWrapper } from '@/ui/section-wrapper';
import {
	Accordion,
	AccordionContent,
	AccordionTrigger,
	AccordionItem,
} from '@/ui/accordion';
import { Heading } from '@/ui/heading';
import { executeGraphql } from '@/api/grapqhlApi';
import { OffersAccordionsDocument } from '@/gql/graphql';

export const Offers = async () => {
	const { offersAccordions } = await executeGraphql(OffersAccordionsDocument);

	return (
		<section className="bg-white py-12">
			<SectionWrapper>
				<div className="mx-auto max-w-screen-xl">
					<Heading variant="black">Oferta</Heading>
					<div className="flex w-full flex-col-reverse items-stretch px-8 md:mt-12 md:flex-row md:justify-between md:gap-x-12 md:px-12">
						<div className="mt-12 gap-y-4 md:mt-0 md:w-3/6">
							<Accordion type="single" collapsible>
								{offersAccordions.map(({ id, title, content }) => {
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
						<div className="leading-8 md:w-3/6">
							<h1 className="mb-4 mt-8 inline-block rounded-md bg-black/65 p-2  text-2xl font-bold text-gold md:mt-0">
								Salon kosmetyczny La Pelle
							</h1>
							<p className="mb-4 md:text-lg ">
								W ofercie gabinetu kosmetologicznego{' '}
								<strong>
									La Pelle Nowoczesna Kosmetologia Agnieszka Trylińska
								</strong>{' '}
								znajdziesz zabiegi poprawiające wygląd skóry oraz terapie
								likwidujące takie defekty jak zaskórniki, trądzik,
								przebarwienia, zmarszczki, blizny, rozstępy, cellulit czy
								wypadające włosy. Szeroki wybór zabiegów sprawia, że w{' '}
								<strong>La Pelle</strong> wykonasz zarówno zabiegi podstawowe
								obejmujące stylizacje brwi i rzęs, pielęgnacje stóp i dłoni jak
								również obecnie najbardziej innowacyjne i zarazem
								najskuteczniejsze zabiegi na rynku kosmetologicznym takie jak
								mezoterapia igłowa, mikroigłowa, lipoliza iniekcyjna czy
								stymulatory tkankowe. Należy wspomnieć również o szerokiej gamie
								terapii oczyszczająch oraz pielęgnacyjnych wykorzystujących
								mikrodermabrazje, oxybrazje, peelingi chemiczne czy mezoterapie
								bezigłową. Zabiegi wykonuje na skutecznych i nowoczesnych
								urządzeniach, a wszystkie preparaty posiadają certyfikaty
								medyczne. Wszystko to z myślą o{' '}
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
			</SectionWrapper>
		</section>
	);
};
