import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/navbar';
import './globals.css';
import { Footer } from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	generator: 'Next.js',
	applicationName: 'LaPelle',
	creator: 'Marcin Kukułka',
	keywords: [
		'LaPelle Tarnów',
		'Salon piękności Tarnów',
		'Uroda LaPelle',
		'Zabiegi kosmetyczne LaPelle',
		'Manicure LaPelle Tarnów',
		'Pedicure LaPelle Tarnów',
		'Makijaż LaPelle Tarnów',
		'Zabiegi na twarz LaPelle Tarnów',
		'Kosmetyczka w Tarnowie',
		'Salon urody w Tarnowie',
		'Profesjonalna pielęgnacja Tarnów',
		'Piękno i relaks Tarnów',
		'LaPelle ekskluzywne zabiegi',
		'Naturalna pielęgnacja LaPelle',
		'Nowoczesny salon piękności Tarnów',
		'LaPelle profesjonalna obsługa',
		'Promocje salon piękności Tarnów',
	],
	metadataBase: new URL('https://lapelle-v2.vercel.app/'),
	alternates: {
		canonical: '/',
	},
	title: 'La Pelle',
	description:
		'La Pelle Nowoczesna Kosmetologia gabinet kosmetyczny w Tarnowie. Manicure, pedicure, zabiegi oczyszczające, usuwanie trądziku, zmarszczek, blizn i rozstępów.',
	openGraph: {
		title: 'LaPelle',
		description: 'La Pelle Nowoczesna Kosmetologia Agnieszka Trylińska',
		url: 'https://lapelle-v2.vercel.app/',
		siteName: 'LaPelle',
		images: [
			{
				url: 'https://lapelle-v2.vercel.app/assets/La_Pelle_logo_prostokat.png',
				width: 800,
				height: 600,
				alt: 'La Pelle',
			},
		],
		locale: 'pl_PL',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
