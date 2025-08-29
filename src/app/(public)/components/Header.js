// src/app/(public)/components/Header.js

// This file is now a SERVER component.

import HeaderClient from './HeaderClient'; 
import { getCachedSiteSettings } from '@/lib/data'; // The server-only import is safe here.

export default async function Header() {
  // 1. Fetch data on the server
  const settings = await getCachedSiteSettings();

  // 2. Render the client component and pass the fetched data as props
  return <HeaderClient settings={settings} />;
}