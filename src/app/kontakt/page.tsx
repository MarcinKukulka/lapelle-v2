import { ContactForm } from '@/components/contact-form';
import { GoogleMap } from '@/components/google-map';
import { ContactInfo } from '@/components/ui/contact-info';
import { ContactOpeningHours } from '@/components/ui/contact-opening-hours';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export default function Contact() {
	return (
		<section className="bg-black">
			<div className="flex flex-col items-center justify-center  bg-white py-20">
				<h2 className="mb-12 text-2xl font-semibold md:text-4xl">
					Napisz do mnie...
				</h2>
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
