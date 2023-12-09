import { GoogleMap } from '@/components/google-map';
import { ContactInfo } from '@/components/ui/contact-info';
import { ContactOpeningHours } from '@/components/ui/contact-opening-hours';

export default function Kontakt() {
	return (
		<section>
			<div className="flex flex-col justify-between bg-black px-10 pt-12 md:flex-row">
				<ContactInfo />
				<ContactOpeningHours />
			</div>
			<GoogleMap />
		</section>
	);
}
