// src/app/admin/dashboard/page.js
import Link from 'next/link';
// import Script from 'next/script'; // Import the Script component for page-specific JS
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import dbConnect from "@/lib/dbconnect";

// Import all necessary models for stats
import Booking from "@/models/Booking"; 
import ContactSubmission from "@/models/ContactSubmission";
import Blog from "@/models/Blog";
import Admin from "@/models/Admin";
import AvailabilityToggle from './components/AvailabilityToggle';
import { getAppointmentStatus } from '../actions/settingsActions';

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

// --- YOUR SERVER LOGIC (No changes needed) ---
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

async function getStats() {
    await dbConnect();
    const [bookingCount, queryCount, blogCount, userCount] = await Promise.all([
        Booking.countDocuments(),
        ContactSubmission.countDocuments(),
        Blog.countDocuments({ isPublished: true }),
        Admin.countDocuments()
    ]);
    return { bookingCount, queryCount, blogCount, userCount };
}
// --- END SERVER LOGIC ---

export default async function DashboardPage() {
    const user = await getUser();
    const stats = await getStats();
        const appointmentStatus = await getAppointmentStatus(); // Fetch the status


    return (
        <>
            {/* 1. Page Header (from index.html) */}
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-home"></i>
                </span> Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>

            {/* 2. Dynamic Stat Cards (from index.html, with your data) */}
            <div className="row">
              {/* Card 1: Total Appointments */}
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    <img src="/admin-purple/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                    <h4 className="font-weight-normal mb-3">Total Appointments <i className="mdi mdi-calendar-check mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">{stats.bookingCount}</h2>
                    <h6 className="card-text"><Link href="/admin/bookings" className="text-white">View All Bookings</Link></h6>
                  </div>
                </div>
              </div>
              {/* Card 2: Contact Queries */}
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    <img src="/admin-purple/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                    <h4 className="font-weight-normal mb-3">Contact Queries <i className="mdi mdi-email-open-outline mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">{stats.queryCount}</h2>
                    <h6 className="card-text"><Link href="/admin/contact-queries" className="text-white">View All Queries</Link></h6>
                  </div>
                </div>
              </div>
              {/* Card 3: Published Blogs */}
              <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    <img src="/admin-purple/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                    <h4 className="font-weight-normal mb-3">Published Blogs <i className="mdi mdi-post-outline mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">{stats.blogCount}</h2>
                    <h6 className="card-text"><Link href="/admin/blog" className="text-white">Manage Blogs</Link></h6>
                  </div>
                </div>
              </div>
              {/* Card 4: System Users */}
               <div className="col-md-3 stretch-card grid-margin">
                <div className="card bg-gradient-primary card-img-holder text-white">
                  <div className="card-body">
                    <img src="/admin-purple/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                    <h4 className="font-weight-normal mb-3">System Users <i className="mdi mdi-account-group mdi-24px float-end"></i>
                    </h4>
                    <h2 className="mb-5">{stats.userCount}</h2>
                    <h6 className="card-text"><Link href="/admin/users" className="text-white">Manage Users</Link></h6>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Static Chart Section (from index.html) */}
            {/* <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <h4 className="card-title float-start">Visit And Sales Statistics</h4>
                      <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-end"></div>
                    </div>
                    {/* The dashboard.js script will target this canvas element */}
                    {/* <canvas id="visit-sale-chart" className="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Traffic Sources</h4>
                    <canvas id="traffic-chart"></canvas>
                    <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>  */}
 <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <AvailabilityToggle initialStatus={appointmentStatus} />
                </div>
            </div>
            {/* 4. Welcome Message Card */}
             <div className="row">
                <div className="col-12 grid-margin">
                     <div className="card">
                         <div className="card-body">
                             <h4 className="card-title">Welcome Admin</h4>
                                {user ? (
                                    <p className="card-description">Hello, <strong>{user.name || user.email}</strong>! Welcome to your dashboard.</p>
                                ) : (
                                    <p className="card-description">Welcome! Could not verify user.</p>
                                )}
                         </div>
                     </div>
                </div>
            </div>

            {/* 5. IMPORTANT: Load Chart and Dashboard-specific JS */}
            {/* <Script src="/admin-purple/vendors/chart.js/chart.umd.js" strategy="lazyOnload" />
            <Script src="/admin-purple/js/dashboard.js" strategy="lazyOnload" /> */}
        </>
    );
}