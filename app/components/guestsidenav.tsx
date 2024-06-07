"use client"
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import {useRouter } from 'next/navigation';
import NavLinks from './guestnav-links';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Link} from "@nextui-org/react";
import axios from "axios";

export default function SideNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const links = [
    { 
        name: 'Home', 
        href: '/guest-dashboard', 
    },
    {
        name: 'Calendar',
        href: '/guest-dashboard/calendar',
    },
    { 
        name: 'Bundles', 
        href: '/guest-dashboard/bundles', 
    },
    {
        name: 'Fish Map',
        href: '/guest-dashboard/fishfinder',
    }
];
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='full' height={"6vh"} className='bg-[#141312]'>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className= "text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <h1 className="font-bold text-white"  style={{ fontSize: '3vh' }}>DewFish</h1>
      </NavbarContent>

      <NavbarContent className = "hidden sm:flex gap-4" justify='center'>
        <NavbarBrand>
        <h1 className="font-bold text-white" style={{ fontSize: '3vh' }}>DewFish</h1>
        </NavbarBrand>
        <NavLinks />
      </NavbarContent>
      
      <NavbarContent justify = "end">
        <NavbarItem>
          <Link href = "/signup" className="flex h-[4vh] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm text-white font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3">
            <div style={{ fontSize: '2vh' }}>Sign Up</div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'h-[48px] justify-center gap-2 rounded-md text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
