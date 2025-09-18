// src/models/Blog.js
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    content: { type: String, required: true },
        // rawContent: { type: String },
    imageUrl: { type: String, trim: true },
    author: { type: String, default: 'Admin' },
    isPublished: { type: Boolean, default: false },
}, { timestamps: true });

// Ensure we create an index on the slug for fast lookups
// BlogSchema.index({ slug: 1 });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);