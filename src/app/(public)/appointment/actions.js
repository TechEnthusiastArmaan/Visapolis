// src/app/(public)/appointment/actions.js

"use server";
import dbConnect from '@/lib/dbconnect';   // <-- BEST PRACTICE
import Booking from '@/models/Booking';     // <-- BEST PRACTICE
import nodemailer from 'nodemailer';
import { startOfDay } from 'date-fns';
import { startOfDay, format } from 'date-fns';
// Helper to format array data for email
const formatArrayForEmail = (arr) => arr && arr.length > 0 ? `<ul>${arr.map(item => `<li>${item}</li>`).join('')}</ul>` : 'Not specified';
const formatStringForEmail = (str) => str ? str : 'Not specified';

export async function bookAppointment(bookingData) {
    try {
        await dbConnect();
        const appointmentDate = startOfDay(new Date(bookingData.date));

        const existingBooking = await Booking.findOne({ 
            date: appointmentDate,
            time: bookingData.time 
        });
        if (existingBooking) {
            return { success: false, error: 'This time slot is no longer available. Please select another time.' };
        }
         const newBookingData = {
            ...bookingData, // Spread all the string/number fields
            date: appointmentDate, // Explicitly override the date string with the Date object
        };

        const booking = new Booking(bookingData);
        await booking.save();

        // --- Send Email Notifications ---
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT == 465, // Note: Use == for type coercion or === with proper type
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });
     const [hour, minute] = bookingData.time.split(':');
        const appointmentDateTime = new Date(bookingData.date);
        appointmentDateTime.setHours(hour, minute);
        const formattedDateTime = format(appointmentDateTime, "EEEE, d MMMM 'at' h:mm a");

        // Email to Client
        await transporter.sendMail({
            from: `"Visapolis Immigration" <${process.env.EMAIL_USER}>`,
            to: bookingData.email,
            subject: 'Appointment Confirmation',
            html: `
                <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
                    <p>Dear ${bookingData.name},</p>
                    <br>
                    <p>Thank you for booking a consultation with us. Your appointment is confirmed for <strong>${formattedDateTime}</strong>.</p>
                    <br>
                    <p>Regards,</p>
                    <p style="margin: 0; font-weight: bold;">Ramandeep Singh, RCIC-IRB</p>
                    <p style="margin: 0;">Visapolis Immigration Inc.</p>
                    <p style="margin: 0;">Edmonton, Alberta</p>
                    <p style="margin: 0;">Phone no: 1(780)566-9900</p>
                    <p style="margin: 0;">Email: connectvisapolisimmigration@gmail.com</p>
                </div>
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
                `,
        });

        return { success: true, data: JSON.parse(JSON.stringify(booking)) };

    } catch (error) {
            console.error("CRITICAL BOOKING ERROR ON VERCEL:", error); 

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