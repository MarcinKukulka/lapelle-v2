import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type AnchorHTMLAttributes, type ReactNode } from 'react';

type ActiveLinkProps = {
	children: ReactNode;
	href: string;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ActiveLink = ({
	children,
	href,
	activeClassName,
	className,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive = pathname === href;
	return (
		<Link
			role="link"
			href={href}
			className={isActive ? activeClassName : className}
			{...props}
		>
			{children}
		</Link>
	);
};
