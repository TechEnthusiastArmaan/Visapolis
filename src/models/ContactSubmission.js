// src/models/ContactSubmission.js
import mongoose from 'mongoose';

const ContactSubmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema);