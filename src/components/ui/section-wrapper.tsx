import { type ReactNode } from 'react';

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <section className="mx-auto my-8 max-w-screen-xl">{children}</section>;
};
