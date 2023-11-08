import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

type HeadingProps = {
	color: string;
	text: string;
};

export const Heading = ({ color, text }: HeadingProps) => {
	return (
		<div className="flex items-center justify-center py-8">
			<span className={`block h-2 w-2/5 border-b-2 border-${color}`} />
			<h2
				className={cn(
					`${playfair.className} text-${color} px-8 text-4xl font-semibold`,
				)}
			>
				{text}
			</h2>
			<span className={`block h-2 w-2/5 border-b-2 border-${color}`} />
		</div>
	);
};
