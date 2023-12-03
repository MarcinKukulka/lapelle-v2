import { type ReactNode } from 'react';

export const SectionWrapper = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={`mx-auto max-w-screen-xl ${className}`}>{children}</div>
	);
};
