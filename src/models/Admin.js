// src/models/Admin.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    select: false, // Don't return password by default on queries
  },
  role: {
    type: String,
    enum: ['admin', 'editor'], // Define possible roles
    default: 'editor',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// ==========================================================
// The failing comparePassword method has been completely REMOVED.
// ==========================================================

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);