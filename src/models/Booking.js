import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    // Appointment Details
    date: { type: Date, required: true }, // Changed from String to Date
    time: { type: String, required: true },

    // Personal Information
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

}, { timestamps: true });

BookingSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);