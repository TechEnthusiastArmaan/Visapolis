// src/app/(public)/appointment/actions.js

"use server";
import dbConnect from '@/lib/dbconnect';   // <-- BEST PRACTICE
import Booking from '@/models/Booking';     // <-- BEST PRACTICE
import nodemailer from 'nodemailer';
import { startOfDay } from 'date-fns';
// Helper to format array data for email
const formatArrayForEmail = (arr) => arr && arr.length > 0 ? `<ul>${arr.map(item => `<li>${item}</li>`).join('')}</ul>` : 'Not specified';
const formatStringForEmail = (str) => str ? str : 'Not specified';

export async function bookAppointment(bookingData) {
    try {
        await dbConnect();
        const appointmentDate = startOfDay(new Date(bookingData.date));

        const existingBooking = await Booking.findOne({ 
            date: appointmentDate, // Query with the corrected date object
            time: bookingData.time 
        });
        if (existingBooking) {
            return { success: false, error: 'This time slot is no longer available. Please select another time.' };
        }

        const booking = new Booking(bookingData);
        await booking.save();

        // --- Send Email Notifications ---
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT == 465, // Note: Use == for type coercion or === with proper type
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        const formattedDate = new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        // Email to Client
        await transporter.sendMail({
            from: `"Your Company Name" <${process.env.EMAIL_USER}>`,
            to: bookingData.email,
            subject: 'Appointment Confirmation',
            html: `
                <p>Hi ${bookingData.name},</p>
                <p>Thank you for booking with us. Your appointment for <strong>${formattedDate}</strong> at <strong>${bookingData.time}</strong> is confirmed.</p>
                <p>We look forward to speaking with you.</p>
            `,
        });

        // Email to Admin
        await transporter.sendMail({
            from: `"Booking System" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Appointment Scheduled!',
            html: `
                <h1>New Booking Details</h1>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${bookingData.time}</p>
                <hr>
                <h2>Client Information</h2>
                <p><strong>Name:</strong> ${bookingData.name}</p>
                <p><strong>Email:</strong> ${bookingData.email}</p>
                <p><strong>Phone:</strong> ${bookingData.phone}</p>
                <p><strong>Age:</strong> ${bookingData.age}</p>
                <p><strong>Citizenship:</strong> ${bookingData.citizenship}</p>
                <hr>
                <h2>Assessment Details</h2>
                <p><strong>Currently in Canada:</strong> ${formatStringForEmail(bookingData.inCanada)}</p>
                <p><strong>Current Status in Canada:</strong></p> ${formatArrayForEmail(bookingData.canadaStatus)}
                <p><strong>Highest Level of Education:</strong></p> ${formatArrayForEmail(bookingData.education)}
                <p><strong>Relatives in Canada:</strong> ${formatStringForEmail(bookingData.relativesInCanada)}</p>
                <p><strong>Studied in Canada Before:</strong> ${formatStringForEmail(bookingData.studiedInCanada)}</p>
                <p><strong>English Proficiency:</strong></p> ${formatArrayForEmail(bookingData.englishProficiency)}
                <p><strong>French Proficiency:</strong></p> ${formatArrayForEmail(bookingData.frenchProficiency)}
                <p><strong>Work Experience (Outside Canada):</strong> ${formatStringForEmail(bookingData.workExperienceOutside)}</p>
                <p><strong>Work Experience (Inside Canada):</strong> ${formatStringForEmail(bookingData.workExperienceInside)}</p>
                <p><strong>Valid Job Offer:</strong> ${formatStringForEmail(bookingData.jobOffer)}</p>
                <p><strong>Applied for Refugee Status Before:</strong> ${formatStringForEmail(bookingData.refugeeStatus)}</p>
                <p><strong>Complications (refusals, criminal records):</strong> ${formatStringForEmail(bookingData.complications)}</p>
            `,
        });

        return { success: true, data: JSON.parse(JSON.stringify(booking)) };

    } catch (error) {
        console.error('Booking Error:', error);
        // Handle potential unique constraint error more gracefully
        if (error.code === 11000) {
            return { success: false, error: 'This time slot was just booked. Please select another time.' };
        }
        return { success: false, error: 'A server error occurred. Please try again later.' };
    }
}
export async function getBookedSlotsForDate(date) {
    if (!date) {
        return [];
    }

    try {
        await dbConnect();
        
        // Ensure we are querying for the entire day, from start to end
        const selectedDate = new Date(date);
        const startOfSelectedDay = startOfDay(selectedDate);
        const endOfSelectedDay = new Date(selectedDate);
        endOfSelectedDay.setHours(23, 59, 59, 999);
        
        // Find all bookings that fall on that specific day
        const bookingsOnDay = await Booking.find({
            date: {
                $gte: startOfSelectedDay,
                $lte: endOfSelectedDay
            }
        }).select('time').lean(); // Only select the 'time' field for efficiency

        // Return just an array of the time strings, e.g., ["09:30", "11:00"]
        return bookingsOnDay.map(booking => booking.time);
        
    } catch (error) {
        console.error("Error fetching booked slots:", error);
        return []; // Return empty on error to prevent crashes
    }
}