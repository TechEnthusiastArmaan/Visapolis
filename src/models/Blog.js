// src/models/Blog.js
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    author: { type: String, default: 'Admin' },
    isPublished: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);