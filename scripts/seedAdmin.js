// scripts/seedAdmin.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // Using bcrypt now
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import dbConnect from '../src/lib/dbconnect.js';
import Admin from '../src/models/Admin.js';

const seedAdmin = async () => {
    if (!process.env.MONGODB_URI) { /* ... */ }
    
    try {
        await dbConnect();
        const adminEmail = 'abc@gmail.com';
        const adminPassword = 'abc';

        const existingAdmin = await Admin.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log('Admin user already exists.');
            return;
        }

        // Hash the password with bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminPassword, salt);

        await Admin.create({
            email: adminEmail,
            hashed_password: hashedPassword
        });

        console.log('✅ Admin user created successfully!');
        
    } catch (error) { /* ... */ } 
    finally {
        await mongoose.disconnect();
    }
};

seedAdmin();