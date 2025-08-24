// src/app/admin/components/AdminHeader.js
"use client";
import Link from 'next/link';

export default function AdminHeader({ user }) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="/admin/dashboard" className="nav-link">Home</Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link">
            Welcome, {user ? user.email : 'Guest'}
          </span>
        </li>
      </ul>
    </nav>
  );
}