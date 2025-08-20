import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    // Appointment Details
    date: { type: String, required: true },
    time: { type: String, required: true },

    // Personal Information
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    citizenship: { type: String, required: true },
    age: { type: Number, required: true },

    // Status & History
    inCanada: { type: String },
    canadaStatus: { type: [String] },
    relativesInCanada: { type: String },
    studiedInCanada: { type: String },
    jobOffer: { type: String },
    refugeeStatus: { type: String },
    complications: { type: String },

    // Qualifications
    education: { type: [String] },
    englishProficiency: { type: [String] },
    frenchProficiency: { type: [String] },
    workExperienceOutside: { type: String },
    workExperienceInside: { type: String },
    
}, { timestamps: true });

BookingSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);