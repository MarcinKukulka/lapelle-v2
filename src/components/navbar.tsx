'use client';

import Link from 'next/link';
import { type Route } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HamburgerMenu } from '@/ui/hamburger-menu';
import Logo from '@/assets/La_Pelle_logo_prostokat.png';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

type RoutesProps = {
	name: string;
	path: Route;
};

const routes: RoutesProps[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Zabiegi', path: '/zabiegi' },
	{ name: 'Cennik', path: '/cennik' },
	{ name: 'Kontakt', path: '/kontakt' },
	{ name: 'O nas', path: '/o-nas' },
	{
		name: 'Rezerwacja',
		path: 'https://booksy.com/pl-pl/112144_la-pelle-nowoczesna-kosmetologia-agnieszka-trylinska_salon-kosmetyczny_10272_tarnow',
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	const handleOpenNav = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<NavigationMenu className="sticky top-0 flex  min-w-full flex-col items-stretch  overflow-hidden whitespace-nowrap text-xl font-bold uppercase text-gold md:h-20 md:flex-row md:items-center md:justify-between md:bg-black xl:px-12 2xl:px-32">
			<NavigationMenuList className="flex items-center justify-between bg-black p-4 ">
				<NavigationMenuItem>
					<Link href={routes[0].path}>
						<Image
							className="h-16 w-32"
							onClick={() => setIsOpen(false)}
							src={Logo}
							alt="Logo La Pelle"
						/>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className="md:hidden">
					<HamburgerMenu isOpen={isOpen} onClick={handleOpenNav} />
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuList
				className={cn(
					' fixed flex h-screen min-w-full flex-col justify-start gap-y-7 bg-black pt-24 transition-transform md:static md:top-0 md:h-20  md:translate-x-0 md:flex-row  md:gap-x-2 md:pr-4 md:pt-1 lg:gap-x-4',
					isOpen ? 'translate-x-0' : 'translate-x-full',
				)}
			>
				{routes.map(({ name, path }) => {
					return (
						<NavigationMenuItem className=" flex md:justify-between" key={name}>
							<Link
								className="after:block after:scale-0 after:border-b-2 after:border-gold after:pb-1 after:transition-transform after:duration-300 after:hover:scale-100"
								href={path}
								onClick={handleOpenNav}
								target={name === 'Rezerwacja' ? '_blank' : ''}
							>
								{name}
							</Link>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
