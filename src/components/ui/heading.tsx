import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

type HeadingProps = {
	textColor: string;
	lineColor: string;
	text: string;
};

export const Heading = ({ textColor, lineColor, text }: HeadingProps) => {
	const HeadingLine = (
		<span className={cn(`block h-2 w-2/5 border-b-2 `, lineColor)} />
	);
	return (
		<div className="flex items-center justify-center py-8">
			{HeadingLine}
			<h2
				className={cn(
					`${playfair.className} } px-8 text-4xl font-semibold`,
					textColor,
				)}
			>
				{text}
			</h2>
			{HeadingLine}
		</div>
	);
};
