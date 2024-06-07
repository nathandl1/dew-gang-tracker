'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
        name: 'Home', 
        href: '/guest-dashboard', 
        icon: HomeIcon 
    },
    {
        name: 'Calendar',
        href: '/guest-dashboard/calendar',
        icon: DocumentDuplicateIcon,
    },
    { 
        name: 'Bundles', 
        href: '/guest-dashboard/bundles', 
        icon: UserGroupIcon 
    },
    {
        name: 'Fish Map',
        href: '/guest-dashboard/fishfinder',
        icon: MapIcon
    }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[4vh] grow items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:py-2 md:px-[0.25vw]',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-[3vh] text-white"/>
            <p className="hidden md:block text-white" style={{ fontSize: '2vh' }}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
