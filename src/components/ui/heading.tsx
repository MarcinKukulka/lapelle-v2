import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

type HeadingProps = {
	variant: 'black' | 'white';
	children: React.ReactNode;
};

export const Heading = ({ variant, children }: HeadingProps) => {
	const textColor = variant === 'black' ? 'text-black' : 'text-white';
	const lineColor = variant === 'black' ? 'border-black' : 'border-white';

	const HeadingLine = (
		<span className={cn(`block h-2 w-2/5 border-b-2 `, lineColor)} />
	);

	return (
		<div className="flex items-center justify-center py-8">
			{HeadingLine}
			<h2
				className={cn(
					`${playfair.className} whitespace-nowrap px-8 text-4xl font-semibold`,
					textColor,
				)}
			>
				{children}
			</h2>
			{HeadingLine}
		</div>
	);
};
