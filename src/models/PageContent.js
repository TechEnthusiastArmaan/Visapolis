// src/models/PageContent.js
import mongoose from 'mongoose';

const PageContentSchema = new mongoose.Schema({
    pageIdentifier: { type: String, required: true, unique: true }, // e.g., 'visa-details'
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
}, { timestamps: true });

export default mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);