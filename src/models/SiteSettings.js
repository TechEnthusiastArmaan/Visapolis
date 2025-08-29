// src/models/SiteSettings.js
import mongoose from 'mongoose';

const SiteSettingsSchema = new mongoose.Schema({
    // We use a fixed key to ensure we only ever have one settings document
    singleton: {
        type: String,
        default: 'main_settings',
        unique: true,
    },
    // Contact Information
    phoneNumber: { type: String, trim: true },
    email: { type: String, trim: true },
    address: { type: String, trim: true },
    googleMapsUrl: { type: String, trim: true },
    workingHours: { type: String, trim: true },
    
    // Social Media Links
    facebookUrl: { type: String, trim: true },
    twitterUrl: { type: String, trim: true },
    linkedinUrl: { type: String, trim: true },
}, { timestamps: true });

export default mongoose.models.SiteSettings || mongoose.model('SiteSettings', SiteSettingsSchema);