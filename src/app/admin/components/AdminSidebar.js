// src/app/admin/components/AdminSidebar.js
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { logout } from '../actions';

export default function AdminSidebar({ user }) {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/admin/dashboard') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link href="/admin/dashboard" className="brand-link">
        <Image
          src="/assets/img/logo2.svg"
          alt="Visapolis Logo"
          className="brand-image img-circle elevation-3"
          width={33}
          height={33}
          style={{ opacity: .8 }}
        />
        <span className="brand-text font-weight-light">Visapolis</span>
      </Link>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <Image
              src="/assets/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
              width={34}
              height={34}
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">{user ? user.email : "Administrator"}</a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link href="/admin/dashboard" className={`nav-link ${isActive('/admin/dashboard') ? 'active' : ''}`}>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/users" className={`nav-link ${isActive('/admin/users') ? 'active' : ''}`}>
                <i className="nav-icon fas fa-users"></i>
                <p>Manage Users</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/bookings" className={`nav-link ${isActive('/admin/bookings') ? 'active' : ''}`}>
                <i className="nav-icon fas fa-calendar-check"></i>
                <p>Bookings</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/contact-queries" className={`nav-link ${isActive('/admin/contact-queries') ? 'active' : ''}`}>
                <i className="nav-icon fas fa-envelope-open-text"></i>
                <p>Contact Queries</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/blog" className={`nav-link ${isActive('/admin/blog') ? 'active' : ''}`}>
                <i className="nav-icon fas fa-blog"></i>
                <p>Blog Posts</p>
              </Link>
            </li>
            <li className="nav-item">
              <form action={logout} className="nav-item">
                <button type="submit" className="nav-link btn btn-link text-left w-100">
                  <i className="nav-icon fas fa-sign-out-alt"></i>
                  <p>Logout</p>
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
