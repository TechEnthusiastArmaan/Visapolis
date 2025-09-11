// src/app/admin/settings/actions.js
'use server';
import dbConnect from "@/lib/dbconnect";
import SiteSettings from "@/models/SiteSettings";
import { revalidatePath } from 'next/cache';
const settingsKey = 'main_settings';
// Function to get the settings document
export async function getSiteSettings() {
try {
await dbConnect();
let settings = await SiteSettings.findOne({ singleton: settingsKey });
// If no settings exist, create a default document
    if (!settings) {
        settings = await SiteSettings.create({ singleton: settingsKey });
    }
    return JSON.parse(JSON.stringify(settings));
} catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
}
}
// Function to update the settings
export async function updateSiteSettings(prevState, formData) {

    // 1. Process the array of day availability settings
    const dayAvailability = [];
    for (let i = 0; i < 7; i++) {
        const date = formData.get(`day_date_${i}`);
        const status = formData.get(`day_status_${i}`);
        // Ensure both date and status exist before adding to the array
        if (date && status) {
            dayAvailability.push({ date, status });
        }
    }

    // 2. Build the complete object with ALL fields from BOTH forms
    const newSettings = {
        // Contact & Social Fields
        phoneNumber: formData.get('phoneNumber'),
        email: formData.get('email'),
        address: formData.get('address'),
        googleMapsUrl: formData.get('googleMapsUrl'),
        workingHours: formData.get('workingHours'),
        facebookUrl: formData.get('facebookUrl'),
        twitterUrl: formData.get('twitterUrl'),
        linkedinUrl: formData.get('linkedinUrl'),
        instagramUrl: formData.get('instagramUrl'),
        tiktokUrl: formData.get('tiktokUrl'),

        // Appointment Schedule Fields
        slotStartTime: formData.get('slotStartTime'),
        slotEndTime: formData.get('slotEndTime'),
        slotDuration: formData.get('slotDuration'),
        dayAvailability, // Add the processed array here
    };

    try {
        await dbConnect();
        await SiteSettings.findOneAndUpdate(
            { singleton: settingsKey }, 
            newSettings, 
            { upsert: true, new: true, setDefaultsOnInsert: true } // Standard options
        );

        // Revalidate the entire site to reflect changes everywhere
        revalidatePath('/', 'layout');
        
        return { message: 'Settings updated successfully!' };
    } catch (error) {
        console.error("Error updating settings:", error);
        return { message: `Failed to update settings.` };
    }
}