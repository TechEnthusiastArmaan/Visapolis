// src/app/admin/components/AdminSidebar.jsx
'use client'; 
import Link from 'next/link'; // IMPORTANT: Import Link
import Image from 'next/image'; // For the user profile image
import { usePathname } from 'next/navigation'; // <-- STEP 2: Import the hook

export default function AdminSidebar({ user }) {
  // STEP 3: Get the current path from the URL
  const pathname = usePathname();

  // Helper function to check if a link is active.
  // This will match parent routes too (e.g., /admin/blog/new will match /admin/blog)
  const isActive = (path) => pathname.startsWith(path);
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {/* User Profile Section */}
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <Image src="/admin-purple/images/faces/face1.jpg" alt="profile" width={50} height={50} />
              <span className="login-status online"></span>
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">{user?.name || 'Admin User'}</span>
              <span className="text-secondary text-small">{user?.role || 'Administrator'}</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>

        {/* --- STEP 4: DYNAMICALLY APPLY THE 'active' CLASS --- */}
        {/* Each 'li' now has a conditional className */}

        <li className={`nav-item ${isActive('/admin/dashboard') ? 'active' : ''}`}>
          <Link className="nav-link" href="/admin/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>

        <li className={`nav-item ${isActive('/admin/blog') ? 'active' : ''}`}>
          <Link className="nav-link" href="/admin/blog">
            <span className="menu-title">Blog Management</span>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </Link>
        </li>
        
        <li className={`nav-item ${isActive('/admin/bookings') ? 'active' : ''}`}>
          <Link className="nav-link" href="/admin/bookings">
            <span className="menu-title">Bookings</span>
            <i className="mdi mdi-calendar-clock menu-icon"></i>
          </Link>
        </li>
        
        <li className={`nav-item ${isActive('/admin/users') ? 'active' : ''}`}>
          <Link className="nav-link" href="/admin/users">
            <span className="menu-title">Users</span>
            <i className="mdi mdi-account-group menu-icon"></i>
          </Link>
        </li>
        
        <li className={`nav-item ${isActive('/admin/contact-queries') ? 'active' : ''}`}>
          <Link className="nav-link" href="/admin/contact-queries">
            <span className="menu-title">Contact Queries</span>
            <i className="mdi mdi-email-alert menu-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}