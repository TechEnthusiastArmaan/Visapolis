// scripts/seedAdmin.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // Using bcrypt now
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import dbConnect from '../src/lib/dbconnect.js';
import Admin from '../src/models/Admin.js';
import { getMaxListeners } from 'events';

const seedAdmin = async () => {
    if (!process.env.MONGODB_URI) { /* ... */ }
    
    try {
        await dbConnect();
    console.log('Database connected successfully.');

    // --- CONFIGURE YOUR FIRST ADMIN USER HERE ---
    const adminEmail = "abc@gmail.com";
    const adminPassword = "abc";
    const adminName = "Administrator";

    // 1. Check if the admin user already exists
    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log('Admin user already exists. No action taken.');
      return;
    }

    // 2. If no admin exists, create one
    console.log('No admin user found. Creating a new one...');
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);
    console.log('Password hashed successfully.');

    const admin = new Admin({
      name: adminName,
      email: adminEmail,
      password: hashedPassword, // Save the HASHED password
      role: 'admin',
    });

    await admin.save();
    console.log('Admin user with hashed password created!');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);

  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

seedAdmin();