"use client";

import { usePathname } from 'next/navigation';
import HomePageHeader from './HomePageHeader';
import OtherPageHeader from './OtherPageHeader';

// This smart component decides which header to show based on the current route.
export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <HomePageHeader /> : <OtherPageHeader />;
}