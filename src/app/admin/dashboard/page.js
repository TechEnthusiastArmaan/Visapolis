// src/app/admin/dashboard/page.js
import Link from 'next/link';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import dbConnect from "@/lib/dbconnect";

// 1. Import all the necessary models for our stats
import Booking from "@/models/Booking"; 
import ContactSubmission from "@/models/ContactSubmission";
import Blog from "@/models/Blog";
import Admin from "@/models/Admin";

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

async function getUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('session_token')?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

// 2. Update the getStats function to fetch all the real data
async function getStats() {
    await dbConnect();
    
    // Use Promise.all to fetch all counts concurrently for better performance
    const [bookingCount, queryCount, blogCount, userCount] = await Promise.all([
        Booking.countDocuments(),
        ContactSubmission.countDocuments(),
        Blog.countDocuments({ isPublished: true }), // Only count published blogs
        Admin.countDocuments()
    ]);
    
    return { bookingCount, queryCount, blogCount, userCount };
}

export default async function DashboardPage() {
    const user = await getUser();
    const stats = await getStats();

    return (
        <>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="/admin/dashboard">Home</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="container-fluid">
                    {/* 3. Update the JSX with the new data, labels, icons, and links */}
                    <div className="row">
                        {/* Box 1: Total Appointments */}
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{stats.bookingCount}</h3>
                                    <p>Total Appointments</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <Link href="/admin/bookings" className="small-box-footer">
                                    More info <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Box 2: Total Contact Queries */}
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{stats.queryCount}</h3>
                                    <p>Total Contact Queries</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <Link href="/admin/contact-queries" className="small-box-footer">
                                    More info <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Box 3: Published Blogs */}
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{stats.blogCount}</h3>
                                    <p>Published Blogs</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-blog"></i>
                                </div>
                                <Link href="/admin/blog" className="small-box-footer">
                                    More info <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Box 4: Manage Users */}
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{stats.userCount}</h3>
                                    <p>System Users</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <Link href="/admin/users" className="small-box-footer">
                                    Manage Users <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                             <div className="card">
                                 <div className="card-header">
                                     <h3 className="card-title">Welcome</h3>
                                 </div>
                                 <div className="card-body">
                                     {user ? (
                                         <p>Hello, <strong>{user.email}</strong>! You are logged in.</p>
                                     ) : (
                                         <p>Welcome! Could not verify user.</p>
                                     )}
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}