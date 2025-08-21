// src/models/Admin.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
        unique: true,
    },
    hashed_password: { // Use a clear name for the hashed password
        type: String,
        required: [true, 'Please provide a password.'],
        minlength: 8
    }
});

// Method to compare entered password with the stored hash
AdminSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.hashed_password);
};

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);