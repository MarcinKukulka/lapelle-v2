"use client"

import Link from 'next/link';
import { type Route } from 'next';
import Image from 'next/image';
import Logo from '@/assets/La_Pelle_logo_prostokat.png';
import {
  NavigationMenu,
  //   NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  //   NavigationMenuLink,
  NavigationMenuList,
  //   NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

type RoutesProps = {
  name: string;
  path: Route;
};

const routes: RoutesProps[] = [
  { name: 'Zabiegi', path: '/zabiegi' },
  { name: 'Cennik', path: '/cennik' },
  { name: 'Kontakt', path: '/kontakt' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Galeria', path: '/galeria' },
];

export const Navbar = () => {
  return (
    <NavigationMenu className="gap-x-10 sticky top-0 left-0 bg-black flex justify-between font-bold text-xl text-gold p-4 min-w-full">
      <NavigationMenuList className="hidden md:block">
        <NavigationMenuItem>
          <Link href="/">
            <Image className="w-32 h-16" src={Logo} alt="Logo La Pelle" />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="flex gap-x-4 p-4">
        {routes.map(({ name, path }) => {
          return (
            <NavigationMenuItem key={name}>
              <Link href={path}>{name}</Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
