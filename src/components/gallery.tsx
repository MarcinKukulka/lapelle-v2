'use client';
import { type ReactNode } from 'react';
import { Heading } from '@/ui/heading';
import 'yet-another-react-lightbox/styles.css';
import useLightbox from '@/hooks/useLightbox';
import { SectionWrapper } from '@/ui/section-wrapper';
import { ImagesContainer } from '@/ui/image-container';
import { readImagesFromGallery } from '@/lib/utils';

const unsplashLink = (id: string, width: number, height: number) =>
	`https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
	{
		id: 'ts1zXzsD7xc',
		width: 1080,
		height: 1620,
	},
	{
		id: 'F_r83HEzsXI',
		width: 1080,
		height: 1426,
	},
	{
		id: 'm82uh_vamhg',
		width: 1080,
		height: 1440,
	},
	{
		id: 'br-Xdb9KE0Q',
		width: 1080,
		height: 716,
	},
	{
		id: '6mze64HRU2Q',
		width: 1080,
		height: 1620,
	},
	{
		id: '7ENqG6Gmch0',
		width: 1080,
		height: 718,
	},
	{
		id: 'KMn4VEeEPR8',
		width: 1080,
		height: 718,
	},
	{
		id: 'uQDRDqpYJHI',
		width: 1080,
		height: 1620,
	},
	{
		id: 'AD6rn3vqG7o',
		width: 1080,
		height: 1620,
	},
	{
		id: 'SYx3UCHZJlo',
		width: 1080,
		height: 720,
	},
	{
		id: 'qH-JPcFXUTY',
		width: 1080,
		height: 1620,
	},
	{
		id: 'NLUkAA-nDdE',
		width: 1080,
		height: 1441,
	},
	{
		id: '55OH6wnJqXo',
		width: 1080,
		height: 1587,
	},
	{
		id: 'CSs8aiN_LkI',
		width: 1080,
		height: 1626,
	},
	{
		id: 'dZ4Ylj91F2M',
		width: 1080,
		height: 1350,
	},
	{
		id: '35muyqODIHA',
		width: 1080,
		height: 1620,
	},
	{
		id: 'xarhNpLSHTk',
		width: 1080,
		height: 720,
	},
	{
		id: 'oR0uERTVyD0',
		width: 1080,
		height: 1922,
	},
	{
		id: 'h0AnGGgseio',
		width: 1080,
		height: 1623,
	},
	{
		id: 'ImHttRUM2jE',
		width: 1080,
		height: 1613,
	},
	{
		id: 'TkGZFU2t9gc',
		width: 1080,
		height: 720,
	},
	{
		id: 'P93ijX1URuU',
		width: 1080,
		height: 1441,
	},
	{
		id: 'MGKGuMP9nLY',
		width: 1080,
		height: 1350,
	},
	{
		id: '1VYdx37vOGQ',
		width: 1080,
		height: 720,
	},
	{
		id: '9kY6iayVGIk',
		width: 1080,
		height: 1620,
	},
	{
		id: '7zT-vbOFoSM',
		width: 1080,
		height: 1309,
	},
	{
		id: 'K8e4DtETWpg',
		width: 1080,
		height: 718,
	},
	{
		id: 'HRVpJIkZP4o',
		width: 1080,
		height: 1923,
	},
	{
		id: 'qY_yTu7YBT4',
		width: 1080,
		height: 639,
	},
	{
		id: 'Siuwr3uCir0',
		width: 1080,
		height: 1440,
	},
	{
		id: 'alfhBV8JxlE',
		width: 1080,
		height: 1620,
	},
	{
		id: '6_pFPo2YM9c',
		width: 1080,
		height: 1440,
	},
	{
		id: 'exfO5IC0etk',
		width: 1080,
		height: 1350,
	},
	{
		id: 'CY3wdG4eRoA',
		width: 1080,
		height: 1920,
	},
	{
		id: '4-Dq3Gyozk8',
		width: 1080,
		height: 1440,
	},
	{
		id: 'yt1-v0TrOi8',
		width: 1080,
		height: 810,
	},
	{
		id: 'nRZoLSr0mEE',
		width: 1080,
		height: 864,
	},
	{
		id: '5iYR93akU48',
		width: 1080,
		height: 720,
	},
	{
		id: 'yRc9FiM1Zdk',
		width: 1080,
		height: 1619,
	},
	{
		id: 'HXqpJnLyHzg',
		width: 1080,
		height: 1620,
	},
	{
		id: '3bAblStd-IY',
		width: 1080,
		height: 607,
	},
	{
		id: 'a6ux9NBPJac',
		width: 1080,
		height: 1350,
	},
	{
		id: '8qEuawM_txg',
		width: 1080,
		height: 1440,
	},
	{
		id: 'p0Fvb9MvLAY',
		width: 1080,
		height: 1350,
	},
	{
		id: '72IuuwilrY8',
		width: 1080,
		height: 1350,
	},
	{
		id: 'Q3Qdb3ni-zw',
		width: 1080,
		height: 1620,
	},
	{
		id: 'AAFH_AADpRg',
		width: 1080,
		height: 2206,
	},
	{
		id: '6JU5C73KQ5Q',
		width: 1080,
		height: 1620,
	},
	{
		id: 'UxZVUDxWppw',
		width: 1080,
		height: 720,
	},
	{
		id: 'X-Far-t1woI',
		width: 1080,
		height: 1620,
	},
	{
		id: 'Y1gBZbB_5bA',
		width: 1080,
		height: 720,
	},
];

const slides = unsplashPhotos.map((photo) => {
	const width = photo.width * 4;
	const height = photo.height * 4;
	return {
		src: unsplashLink(photo.id, width, height),
		width,
		height,
	};
});
type GalleryImages = {
	src: string;
	alt: string;
	width: number;
	height: number;
};
export async function getStaticProps() {
	const imagesPath: string = 'src/assets/gallery';
	const src = '/../assets/gallery';

	const galleryImages: GalleryImages[] = readImagesFromGallery(imagesPath, src);

	return {
		props: {
			galleryImages,
		},
	};
}

export const Gallery = ({ children }: { children: ReactNode }) => {
	const { openLightbox, renderLightbox } = useLightbox();
	return (
		<SectionWrapper>
			<Heading lineColor="border-black" text="Galeria" textColor="text-black" />

			{children}
			<ImagesContainer galleryImages={[]} />
			<button type="button" onClick={openLightbox}>
				Open
			</button>
			{renderLightbox({ slides })}
		</SectionWrapper>
	);
};
