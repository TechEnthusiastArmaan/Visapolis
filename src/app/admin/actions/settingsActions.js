// src/app/admin/actions/settingsActions.js
'use server';

import dbConnect from "@/lib/dbconnect";
import Setting from "@/models/Setting"; // We will create this model next
import { revalidatePath } from "next/cache";

const APPOINTMENT_STATUS_KEY = "isAvailableForAppointments";

// --- Function to GET the current status ---
export async function getAppointmentStatus() {
    try {
        await dbConnect();
        let setting = await Setting.findOne({ key: APPOINTMENT_STATUS_KEY });

        if (!setting) {
            setting = await Setting.create({ key: APPOINTMENT_STATUS_KEY, value: true });
        }
        return setting.value;
    } catch (error) {
        console.error("Error fetching appointment status:", error);
        return true;
    }
}

// --- Function to UPDATE the status ---
export async function updateAppointmentStatus(newStatus) {
    try {
        await dbConnect();
        await Setting.findOneAndUpdate(
            { key: APPOINTMENT_STATUS_KEY },
            { value: newStatus },
            { upsert: true }
        );

        revalidatePath('/admin/dashboard');
        revalidatePath('/appointment');
        
        return { success: true, message: "Status updated successfully." };
    } catch (error) {
        console.error("Error updating appointment status:", error);
        return { success: false, message: "Failed to update status." };
    }
}