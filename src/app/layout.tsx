import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/navbar';
import './globals.css';
import { Footer } from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
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
				url: 'https://lapelle-v2.vercel.app/assets/La_Pelle_logo_prostokat.png', // Must be an absolute URL
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
