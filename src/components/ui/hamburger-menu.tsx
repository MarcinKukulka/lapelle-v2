import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
type HamburgerMenuProps = {
	isOpen: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const HamburgerMenu = ({ isOpen, ...props }: HamburgerMenuProps) => {
	const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-gold transition ease transform duration-300`;
	return (
		<button
			className="flex h-12 w-12 flex-col items-center justify-center"
			{...props}
		>
			<div
				className={cn(
					genericHamburgerLine,
					isOpen && 'translate-y-3 rotate-45 ',
				)}
			/>
			<div className={cn(genericHamburgerLine, isOpen && 'opacity-0')} />
			<div
				className={cn(
					genericHamburgerLine,
					isOpen && '-translate-y-3 -rotate-45 ',
				)}
			/>
		</button>
	);
};
