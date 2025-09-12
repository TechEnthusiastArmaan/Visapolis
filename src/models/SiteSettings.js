import mongoose from 'mongoose';

// The sub-schema for a single day's availability
const DayAvailabilitySchema = new mongoose.Schema({
    date: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['full_day', 'morning', 'afternoon', 'unavailable', 'custom'], // <-- 'custom' is added
        default: 'full_day' 
    },
    // Optional fields, only used when status is 'custom'
    fromTime: { type: String, trim: true },
    toTime: { type: String, trim: true },
}, { _id: false });

const SiteSettingsSchema = new mongoose.Schema({
    singleton: { type: String, default: 'main_settings', unique: true },
    
    // --- All your other fields remain the same ---
    phoneNumber: { type: String, trim: true, default: '+1 123 456 7890' },
    email: { type: String, trim: true, default: 'info@example.com' },
    address: { type: String, trim: true, default: 'Your Business Address' },
    googleMapsUrl: { type: String, trim: true, default: '' },
    workingHours: { type: String, trim: true, default: 'Mon-Fri: 9AM - 5PM' },
    facebookUrl: { type: String, trim: true, default: '#' },
    twitterUrl: { type: String, trim: true, default: '#' },
    linkedinUrl: { type: String, trim: true, default: '#' },
    instagramUrl: { type: String, trim: true, default: '#' },
    tiktokUrl: { type: String, trim: true, default: '#' },
    youtubeUrl: { type: String, trim: true, default: '#' },
    isAvailableForAppointments: { type: Boolean, default: true },
    slotStartTime: { type: String, trim:true, default: '09:00' },
    slotEndTime: { type: String, trim: true, default: '15:00' },
    slotDuration: { type: Number, default: 30 },
    
    // The array now uses the updated DayAvailabilitySchema
    dayAvailability: { type: [DayAvailabilitySchema], default: [] },
    
}, { timestamps: true });

export default mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);