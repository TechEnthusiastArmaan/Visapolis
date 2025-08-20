"use server";

import dbConnect from '../lib/dbconnect';
import Booking from '../models/Booking';
import nodemailer from 'nodemailer';

// Helper to format array data for email
const formatArrayForEmail = (arr) => arr && arr.length > 0 ? `<ul>${arr.map(item => `<li>${item}</li>`).join('')}</ul>` : 'Not specified';

export async function bookAppointment(bookingData) {
    try {
        await dbConnect();

        const existingBooking = await Booking.findOne({ date: bookingData.date, time: bookingData.time });
        if (existingBooking) {
            return { success: false, error: 'This time slot is no longer available.' };
        }

        const booking = new Booking(bookingData);
        await booking.save();

        // --- Send Email Notifications ---
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT == 465,
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        const formattedDate = new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        // Email to Client
        await transporter.sendMail({
            from: `"Your Company" <${process.env.EMAIL_USER}>`,
            to: bookingData.email,
            subject: 'Appointment Confirmation',
            html: `<p>Hi ${bookingData.name}, your appointment for ${formattedDate} at ${bookingData.time} is confirmed.</p>`,
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
                <p><strong>Currently in Canada:</strong> ${bookingData.inCanada}</p>
                <p><strong>Education:</strong></p> ${formatArrayForEmail(bookingData.education)}
                
                <!-- Add other fields as needed -->
            `,
        });

        return { success: true, data: JSON.parse(JSON.stringify(booking)) };

    } catch (error) {
        console.error('Booking Error:', error);
        return { success: false, error: 'A server error occurred.' };
    }
}
