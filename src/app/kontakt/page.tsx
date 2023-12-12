import { ContactForm } from '@/components/contact-form';
import { GoogleMap } from '@/components/google-map';
import { ContactInfo } from '@/components/ui/contact-info';
import { ContactOpeningHours } from '@/components/ui/contact-opening-hours';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export default function Kontakt() {
	return (
		<section className="bg-black">
			<div className="flex justify-center  bg-white py-20">
				<ContactForm />
			</div>
			<SectionWrapper>
				<div className="flex flex-col justify-between px-10 pt-12 md:flex-row">
					<ContactInfo />
					<ContactOpeningHours />
				</div>
			</SectionWrapper>
			<GoogleMap />
		</section>
	);
}
