// scripts/runSeed.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Step 1: Build the absolute path to your .env.local file ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '..', '.env.local');

// --- Step 2: Configure and load dotenv with the explicit path ---
dotenv.config({ path: envPath });

// Log to confirm the path and loaded variable
console.log(`Attempting to load .env file from: ${envPath}`);
console.log(`MONGODB_URI found: ${process.env.MONGODB_URI ? 'Yes' : 'No'}`);


// --- Step 3: Check if the variable was loaded before continuing ---
if (!process.env.MONGODB_URI) {
    console.error('\x1b[31m%s\x1b[0m', 'CRITICAL ERROR: MONGODB_URI could not be loaded. Please check the path and file content.');
    process.exit(1);
}

// --- Step 4: Dynamically import and run your main seed script ---
// This ensures the environment is fully loaded BEFORE your script runs.
console.log('Environment configured. Running seed script...');
import('./seedAdmin.js');