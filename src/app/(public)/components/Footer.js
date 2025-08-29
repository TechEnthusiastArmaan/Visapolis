// src/app/(public)/components/Footer.js
import { getCachedSiteSettings } from '@/lib/data';
import FooterClient from './FooterClient'; // Import the new client part

// This is the async Server Component
export default async function Footer() {
    // 1. Fetch data on the server
    const settings = await getCachedSiteSettings();
    
    // 2. Render the client component, passing data as props
    return <FooterClient settings={settings} />;
}