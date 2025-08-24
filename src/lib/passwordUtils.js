// src/lib/passwordUtils.js
import bcrypt from 'bcrypt';
import Admin from '@/models/Admin'; // Assuming Admin model is in this path

/**
 * A robust, standalone function to verify a user's password.
 * It is completely independent of Mongoose methods.
 * @param {string} email - The user's email address.
 * @param {string} enteredPassword - The plain-text password to check.
 * @returns {Promise<object|null>} The user object (without password) if successful, otherwise null.
 */
export async function verifyPassword(email, enteredPassword) {
  try {
    // 1. Fetch the user AND their hashed password from the database.
    const user = await Admin.findOne({ email }).select('+password');

    // 2. If no user is found with that email, the login fails.
    if (!user) {
      console.log(`Authentication failed: No user found for email ${email}`);
      return null;
    }

    // 3. Compare the provided password with the stored hash.
    // user.password is guaranteed to be the hash string here.
    const isMatch = await bcrypt.compare(enteredPassword, user.password);

    // 4. If the passwords do not match, the login fails.
    if (!isMatch) {
      console.log(`Authentication failed: Password mismatch for email ${email}`);
      return null;
    }

    // 5. If successful, return the user object after removing the password.
    const userObject = user.toObject();
    delete userObject.password;
    
    console.log(`Authentication successful for email ${email}`);
    return userObject;

  } catch (error) {
    console.error('Error in verifyPassword function:', error);
    return null; // Return null on any unexpected error
  }
}