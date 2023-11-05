'use client';

import Link from 'next/link';
import { type Route } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HamburgerMenu } from './ui/hamburger-menu';
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
  { name: 'Galeria', path: '/galeria' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <NavigationMenu className="sticky top-0 uppercase flex flex-col md:flex-row md:h-20  items-stretch font-bold md:items-center text-xl whitespace-nowrap md:justify-between md:bg-black text-gold min-w-full overflow-hidden xl:px-12 2xl:px-32">
      <NavigationMenuList className=" bg-black justify-between flex items-center p-4 ">
        <NavigationMenuItem>
          <Link href={routes[0].path}>
            <Image className="w-32 h-16" src={Logo} alt="Logo La Pelle" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="md:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList
        className={cn(
          'flex flex-col md:flex-row  h-screen md:h-20 md:items-center md:gap-x-2 lg:gap-x-4 justify-start gap-y-7 md:translate-x-0 md:pt-1 md:pr-4 transition-transform pt-24 bg-black',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {routes.map(({ name, path }) => {
          return (
            <NavigationMenuItem className="flex md:justify-center" key={name}>
              <Link
                className="after:block after:border-gold after:pb-1 after:border-b-2 after:scale-0 after:hover:scale-100 after:transition-transform after:duration-300"
                href={path}
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
