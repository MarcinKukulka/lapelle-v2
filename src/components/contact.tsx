import { ContactInfo } from '@/ui/contact-info';
import { Heading } from '@/ui/heading';
import { SectionWrapper } from '@/ui/section-wrapper';
import { ContactOpeningHours } from '@/ui/contact-opening-hours';

export const Contact = () => {
	return (
		<section className="bg-black">
			<SectionWrapper>
				<Heading lineColor="border-white" textColor="text-white">
					Kontakt
				</Heading>
				<div className="mt-12 flex flex-col justify-between px-10 md:flex-row">
					<ContactInfo />
					<ContactOpeningHours />
				</div>
			</SectionWrapper>
		</section>
	);
};
