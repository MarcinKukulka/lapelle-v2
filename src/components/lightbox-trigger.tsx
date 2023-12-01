'use client';

import 'yet-another-react-lightbox/styles.css';
import useLightbox from '@/hooks/useLightbox';
import { type GalleryImages } from '@/api/fetchGalleryImages';

export const LightboxTrigger = ({
	slides,
	children,
}: {
	slides: GalleryImages[];
	children: React.ReactNode;
}) => {
	const { openLightbox, renderLightbox } = useLightbox();

	return (
		<>
			<button className="border-none" type="button" onClick={openLightbox}>
				{children}
			</button>
			{renderLightbox({ slides })}
		</>
	);
};
