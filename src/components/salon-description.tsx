'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const descriptionVariants = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};

export const SalonDescription = () => {
	const descriptionControls = useAnimation();

	useEffect(() => {
		const timer = setTimeout(() => {
			void descriptionControls.start('visible');
		}, 500); // Opóźnienie 500 milisekund

		return () => clearTimeout(timer);
	}, [descriptionControls]);

	return (
		<motion.div
			initial="hidden"
			animate={descriptionControls}
			variants={descriptionVariants}
			transition={{ duration: 0.5 }}
			className="leading-8 md:w-3/6"
		>
			<h1 className="mb-4 mt-8 inline-block rounded-md bg-black/65 p-2 text-2xl font-bold text-gold md:mt-0">
				Salon kosmetyczny La Pelle
			</h1>
			<p className="mb-4 md:text-lg ">
				W ofercie gabinetu kosmetologicznego{' '}
				<strong>La Pelle Nowoczesna Kosmetologia Agnieszka Trylińska</strong>{' '}
				znajdziesz zabiegi poprawiające wygląd skóry oraz terapie likwidujące
				takie defekty jak zaskórniki, trądzik, przebarwienia, zmarszczki,
				blizny, rozstępy, cellulit czy wypadające włosy. Szeroki wybór zabiegów
				sprawia, że w <strong>La Pelle</strong> wykonasz zarówno zabiegi
				podstawowe obejmujące stylizacje brwi i rzęs, pielęgnacje stóp i dłoni
				jak również obecnie najbardziej innowacyjne i zarazem najskuteczniejsze
				zabiegi na rynku kosmetologicznym takie jak mezoterapia igłowa,
				mikroigłowa, lipoliza iniekcyjna czy stymulatory tkankowe. Należy
				wspomnieć również o szerokiej gamie terapii oczyszczająch oraz
				pielęgnacyjnych wykorzystujących mikrodermabrazje, oxybrazje, peelingi
				chemiczne czy mezoterapie bezigłową. Zabiegi wykonuje na skutecznych i
				nowoczesnych urządzeniach, a wszystkie preparaty posiadają certyfikaty
				medyczne. Wszystko to z myślą o{' '}
				<strong>Twoim zdrowiu i bezpieczeństwie</strong>.
			</p>
			<p className="md:text-lg">
				W La Pelle znajdziesz wszystko co najlepsze dla Twojej skóry! Przyjdź
				już dziś i skorzystaj z{' '}
				<span className="font-semibold">darmowej konsultacji </span>
				przeprowadzonej przez wykwalifikowanego kosmetologa. Znajdziesz mnie w{' '}
				<strong>Tarnowie przy ulicy Bema 12</strong>, w salonie fryzjerskim
				Studio Retro.
			</p>
		</motion.div>
	);
};
