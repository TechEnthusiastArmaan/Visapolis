import mongoose from 'mongoose';

const DayAvailabilitySchema = new mongoose.Schema({
    date: { type: String, required: true }, // Format: "YYYY-MM-DD"
    status: { 
        type: String, 
        enum: ['full_day', 'morning', 'afternoon', 'unavailable'], 
        default: 'full_day' 
    }
}, { _id: false });

const SiteSettingsSchema = new mongoose.Schema({
    singleton: {
        type: String,
        default: 'main_settings',
        unique: true,
    },
    // Contact Info
    phoneNumber: { type: String, trim: true, default: '+1 123 456 7890' },
    email: { type: String, trim: true, default: 'info@example.com' },
    address: { type: String, trim: true, default: 'Your Business Address' },
    googleMapsUrl: { type: String, trim: true, default: '' },
    workingHours: { type: String, trim: true, default: 'Mon-Fri: 9AM - 5PM' },
    
    // Social Media Links
    facebookUrl: { type: String, trim: true, default: '#' },
    twitterUrl: { type: String, trim: true, default: '#' },
    linkedinUrl: { type: String, trim: true, default: '#' },
    instagramUrl: { type: String, trim: true, default: '#' },
    tiktokUrl: { type: String, trim: true, default: '#' },

    // Appointment Settings
    isAvailableForAppointments: { type: Boolean, default: true },
    slotStartTime: { type: String, trim: true, default: '09:00' },
    slotEndTime: { type: String, trim: true, default: '15:00' },
    slotDuration: { type: Number, default: 30 },
    dayAvailability: { type: [DayAvailabilitySchema], default: [] },
    
}, { timestamps: true });

export default mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);