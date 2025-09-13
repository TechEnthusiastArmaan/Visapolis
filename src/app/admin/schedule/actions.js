// src/app/admin/schedule/actions.js
'use server';
import dbConnect from "@/lib/dbconnect";
import SiteSettings from "@/models/SiteSettings";
import { revalidatePath } from 'next/cache';

// This action ONLY updates the schedule-related fields
export async function updateScheduleSettings(prevState, formData) {
    const dayAvailability = [];
    for (let i = 0; i < 7; i++) {
        const date = formData.get(`day_date_${i}`);
        const status = formData.get(`day_status_${i}`);
        if (date && status) {
            // Create a base object with the required fields
            const dayData = { date, status };

            // If the status for this day is 'custom', ALSO get the from and to times
            if (status === 'custom') {
                dayData.fromTime = formData.get(`day_from_time_${i}`);
                dayData.toTime = formData.get(`day_to_time_${i}`);
            }
            
            // Push the complete object to the array
            dayAvailability.push(dayData);
        }
    }
    
    const scheduleSettings = {
        slotStartTime: formData.get('slotStartTime'),
        slotEndTime: formData.get('slotEndTime'),
        slotDuration: formData.get('slotDuration'),
        dayAvailability,
    };
    
    try {
        await dbConnect();
        await SiteSettings.findOneAndUpdate(
            { singleton: 'main_settings' }, 
            { $set: scheduleSettings }, // Use $set to update only these fields
            { upsert: true }
        );

        revalidatePath('/appointment'); // Revalidate the public booking page
        revalidatePath('/admin/schedule'); // Revalidate this admin page
        
        return { message: 'Schedule updated successfully!' };
    } catch (error) {
        console.error("Error updating schedule:", error);
        return { message: 'Failed to update schedule.' };
    }
}