// scripts/seedAdmin.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dbConnect from '../src/lib/dbconnect.js';
import Admin from '../src/models/Admin.js';


// // --- This robust path is the key fix ---
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });
// // ------------------------------------


const seedAdmin = async () => {
    if (!process.env.MONGODB_URI) {
        console.error('\x1b[31m%s\x1b[0m', 'ERROR: MONGODB_URI not found. Please ensure .env.local is in the project root and is configured correctly.');
        process.exit(1);
    }
    
    // We can use the Next.js dbConnect here, as it's an ES Module
    try {
        await dbConnect();
        console.log('\x1b[32m%s\x1b[0m', 'Database connected successfully.');
    } catch(dbError) {
        console.error('\x1b[31m%s\x1b[0m', 'Database connection failed:', dbError);
        process.exit(1);
    }

    try {
        const adminEmail = "abc@gmail.com";
        const adminPassword = "abc";
        const adminName = "Administrator";

        const existingAdmin = await Admin.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log('\x1b[33m%s\x1b[0m', `Admin user "${adminEmail}" already exists. No action taken.`);
            return;
        }

        console.log(`Creating new admin user "${adminEmail}"...`);
        const hashedPassword = await bcrypt.hash(adminPassword, 12);

        const admin = new Admin({
          name: adminName,
          email: adminEmail,
          password: hashedPassword,
          role: 'admin',
        });
        await admin.save();
        
        console.log('\x1b[32m%s\x1b[0m', '✅ Admin user created successfully!');
        console.log(`   Email: ${adminEmail}`);
        console.log(`   Password: ${adminPassword}`);

    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Error during admin user creation:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed.');
    }
};

seedAdmin();