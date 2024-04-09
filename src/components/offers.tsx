import { Accordions } from './accordions';
import { SalonDescription } from './salon-description';
import { SectionWrapper } from '@/ui/section-wrapper';

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
					<div className="flex h-full w-full flex-col-reverse items-stretch px-8 md:mt-12 md:flex-row md:justify-between md:gap-x-12 md:px-12">
						<Accordions offersAccordions={offersAccordions} />
						<SalonDescription />
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};
