import { type ReactNode } from 'react';

export const SectionWrapper = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`mx-auto my-8 max-w-screen-xl ${className}`}>
			{children}
		</div>
	);
};
