'use server';

import dbConnect from "@/lib/dbconnect";
import SiteSettings from "@/models/SiteSettings";
import { revalidatePath } from 'next/cache';

const settingsKey = 'main_settings';

// Universal function to get all site settings
export async function getSiteSettings() {
    try {
        await dbConnect();
        let settings = await SiteSettings.findOne({ singleton: settingsKey });
        
        if (!settings) {
            console.log("No settings found, creating default document.");
            settings = await SiteSettings.create({ singleton: settingsKey });
        }
        return JSON.parse(JSON.stringify(settings));
    } catch (error) {
        console.error("Error fetching site settings:", error);
        return null;
    }
}

// Universal function to update all settings
export async function updateSiteSettings(prevState, formData) {
    const dayAvailability = [];
    for (let i = 0; i < 7; i++) {
        const date = formData.get(`day_date_${i}`);
        const status = formData.get(`day_status_${i}`);
        if (date && status) {
            dayAvailability.push({ date, status });
        }
    }
    
    const newSettingsData = {
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
        // Schedule fields
        slotStartTime: formData.get('slotStartTime'),
        slotEndTime: formData.get('slotEndTime'),
        slotDuration: formData.get('slotDuration'),
        dayAvailability,
    };
    
    try {
        await dbConnect();
        await SiteSettings.findOneAndUpdate({ singleton: settingsKey }, newSettingsData, { upsert: true });
        revalidatePath('/', 'layout'); // Revalidate the whole site
        return { message: 'Settings updated successfully!' };
    } catch (error) {
        console.error("Error updating settings:", error);
        return { message: `Failed to update settings.` };
    }
}
export async function getAppointmentStatus() {
    try {
        await dbConnect();
        // Find the setting, and select ONLY the 'isAvailableForAppointments' field for efficiency
        const setting = await SiteSettings.findOne({ singleton: settingsKey }).select('isAvailableForAppointments');
        
        // If the entire document doesn't exist, default to true.
        // If the field itself is not set, default to true.
        return setting?.isAvailableForAppointments ?? true;
    } catch (error) {
        console.error("Error fetching single appointment status:", error);
        return true; // Default to 'true' in case of an error
    }
}

// --- Separate action specifically for the toggle ---
export async function updateAppointmentStatus(newStatus) {
    try {
        await dbConnect();
        await SiteSettings.findOneAndUpdate(
            { singleton: settingsKey },
            { isAvailableForAppointments: newStatus },
            { upsert: true }
        );
        revalidatePath('/admin/dashboard');
        revalidatePath('/appointment');
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to update status.' };
    }
}