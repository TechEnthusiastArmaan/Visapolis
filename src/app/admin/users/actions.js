// src/app/admin/users/actions.js
'use server';

import dbConnect from '@/lib/dbconnect';
import Admin from '@/models/Admin';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

// --- DATA FETCHING FUNCTIONS ---

// export async function getUsers() {
//   try {
//     await dbConnect();
//     const users = await Admin.find({}).sort({ createdAt: -1 });
//     return JSON.parse(JSON.stringify(users));
//   } catch (error) {
//     console.error('Failed to fetch users:', error);
//     return [];
//   }
// }
export async function getUsers() {
    try {
      await dbConnect();
      
      // 1. Fetch the data as Mongoose documents
      const users = await Admin.find({}).sort({ createdAt: -1 });
  
      // 2. THIS IS THE CRITICAL FIX:
      //    Convert the array of Mongoose documents into an array of plain JavaScript objects.
      //    This process sanitizes the data, removing all Mongoose-specific methods and
      //    converting complex types like ObjectID and Date into simple strings.
      return JSON.parse(JSON.stringify(users));
  
    } catch (error) {
      console.error('Failed to fetch users:', error);
      return [];
    }
  }
export async function getUserById(id) {
  try {
    await dbConnect();
    const user = await Admin.findById(id);
    if (!user) throw new Error('User not found');
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}


// --- MUTATION ACTIONS ---

export async function createUser(prevState, formData) {
    await dbConnect();
    const data = Object.fromEntries(formData.entries());
  
    if (!data.password || data.password !== data.confirmPassword) {
      return { message: 'Passwords are required and must match.' };
    }
  
    try {
      const existingUser = await Admin.findOne({ email: data.email });
      if (existingUser) {
        return { message: 'An account with this email already exists.' };
      }
  
      // --- MANUAL HASHING ---
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);
  
      const newUser = new Admin({
          name: data.name,
          email: data.email,
          password: hashedPassword, // Save the hashed password
          role: data.role,
      });
  
      await newUser.save();
    } catch (error) {
      return { message: `Failed to create user: ${error.message}` };
    }
    
    revalidatePath('/admin/users');
    redirect('/admin/users');
  }
  export async function deleteUser(userId) {
    try {
        await dbConnect();
        await Admin.findByIdAndDelete(userId);
        
        // This tells Next.js to re-fetch the data on the users page, so the deleted user will disappear from the list.
        revalidatePath('/admin/users');
        
        return { success: true };
    } catch (error) {
        console.error('Delete user error:', error);
        return { success: false, message: 'Failed to delete user.' };
    }
}
  
  export async function updateUser(userId, prevState, formData) {
      await dbConnect();
      const data = Object.fromEntries(formData.entries());
  
      try {
          const user = await Admin.findById(userId);
          if (!user) {
              return { message: 'User not found.' };
          }
  
          // Only update and hash the password if a new one is provided
          if (data.password) {
              if (data.password !== data.confirmPassword) {
                  return { message: 'New passwords do not match.' };
              }
              // --- MANUAL HASHING ---
              const salt = await bcrypt.genSalt(10);
              user.password = await bcrypt.hash(data.password, salt);
          }
  
          user.name = data.name;
          user.email = data.email;
          user.role = data.role;
  
          await user.save();
      } catch (error) {
          return { message: `Failed to update user: ${error.message}` };
      }
  
      revalidatePath('/admin/users');
      revalidatePath(`/admin/users/edit/${userId}`);
      redirect('/admin/users');
  }
  
  //