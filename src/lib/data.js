// src/lib/data.js
import 'server-only'; // This ensures the function only ever runs on the server
import dbConnect from './dbconnect';
import SiteSettings from '@/models/SiteSettings';
import { cache } from 'react';

// Using React's cache function to prevent multiple database queries for the same data in a single request.
export const getCachedSiteSettings = cache(async () => {
    try {
        await dbConnect();
        let settings = await SiteSettings.findOne({ singleton: 'main_settings' }).lean(); // .lean() gives us a plain JS object
        
                // console.log('[SERVER LOG] Fetched settings from DB:', settings);

        // If no settings exist in the DB, return a default object to prevent site errors
        if (!settings) {
                        console.log("No settings document found in the database. Creating a default one for the session.");

            return {
                phoneNumber: '+1 000 000 0000',
                email: 'info@example.com',
                address: 'Your Business Address, City',
                googleMapsUrl: '',
                workingHours: 'Mon-Fri: 9AM - 5PM',
                facebookUrl: '#',
                twitterUrl: '#',
                linkedinUrl: '#',
            };
        }
        else{
                        console.log("Successfully fetched settings from the database:", settings);

        }
        
        // Return the plain object, ensuring it's serializable
        return JSON.parse(JSON.stringify(settings));

    } catch (error) {
                console.error("CRITICAL ERROR in getCachedSiteSettings:", error);

        console.error("Error fetching site settings:", error);
        // Return the default object on error as well
        return {
            phoneNumber: '+1 000 000 0000',
            email: 'info@example.com',
            address: 'Your Business Address, City',
            googleMapsUrl: '',
            workingHours: 'Mon-Fri: 9AM - 5PM',
            facebookUrl: '#',
            twitterUrl: '#',
            linkedinUrl: '#',
        };
    }
});