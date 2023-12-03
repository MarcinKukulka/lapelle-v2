import Image from 'next/image';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactLogo from '@/assets/contact.jpg';

const CONTACT_CONTEXT = [
	{
		href: '#google-map',
		icon: <MapPin />,
		text: '33-100 Tarnów, ul. Bema 12',
	},
	{
		href: 'tel://606133720',
		icon: <Phone />,
		text: '606 133 720',
	},
	{
		href: 'mailto://agnieszka.trylinska@gmail.com',
		icon: <Mail />,
		text: 'agnieszka.trylinska@gmail.com',
	},
	{
		href: 'https://www.facebook.com/nowoczesnakosmetologialapelle',
		icon: <Facebook />,
		text: 'Facebook',
	},
	{
		href: 'https://www.instagram.com/lapelle_kosmetologiatarnow',
		icon: <Instagram />,
		text: 'Instagram',
	},
];
const targetArray = ['Facebook', 'Instagram'];

export const ContactInfo = () => {
	const checkTarget = (target: string) => {
		if (targetArray.includes(target)) {
			return '_blank';
		}
		return undefined;
	};
	return (
		<div className="px-8 md:w-1/2">
			<Image
				className="object-contain"
				width={500}
				height={500}
				src={ContactLogo}
				alt="Logo salonu"
			/>

			<ul className="flex flex-col gap-y-4 py-12">
				{CONTACT_CONTEXT.map(({ href, icon, text }) => {
					return (
						<li key={text}>
							<Link target={checkTarget(text)} href={href}>
								<button type="button" className="flex gap-4 text-white">
									<span className="text-gold">{icon}</span> {text}
								</button>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
