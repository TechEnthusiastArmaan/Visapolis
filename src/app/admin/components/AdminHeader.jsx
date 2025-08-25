// src/app/admin/components/AdminHeader.jsx
'use client';

import Link from 'next/link'; // IMPORTANT: Import the Link component
import { logout } from '../actions'; // IMPORTANT: Import your server action

import Image from 'next/image'; // For the user profile image
export default function AdminHeader({ user }) {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        {/* --- CHANGE: Use <Link> for navigation --- */}
        <Link className="navbar-brand brand-logo" href="/admin/dashboard">
          {/* --- CHANGE: Use actual asset paths --- */}
          <img src="/assets/img/logo2.svg" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" href="/admin/dashboard">
          <img src="/admin-purple/images/logo-mini.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="mdi mdi-menu"></span>
        </button>
        {/* You can keep the search form or remove it if not needed */}
        <div className="search-field d-none d-md-block">
            {/* ... search form ... */}
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
  <div className="nav-profile-img">
    <Image src="/admin-purple/images/faces/face1.jpg" alt="image" width={32} height={32} style={{ borderRadius: '50%' }}/>
    <span className="availability-status online"></span>
  </div>
  <div className="nav-profile-text">
    {/* The <p> tag is all that's needed inside here */}
    <p className="mb-1 text-black">{user?.name || 'Admin User'}</p>
  </div>
  {/* The dropdown arrow is now automatically added by the `.dropdown-toggle` class on the parent `<a>` tag */}
</a>
            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
              {/* <a className="dropdown-item" href="#">
                <i className="mdi mdi-cached me-2 text-success"></i> Activity Log
              </a> */}
              <div className="dropdown-divider"></div>
              {/* --- CHANGE: Use a form to trigger the server action --- */}
              <form action={logout}>
                <button type="submit" className="dropdown-item">
                  <i className="mdi mdi-logout me-2 text-primary"></i> Signout
                </button>
              </form>
            </div>
          </li>
          {/* ... Other icons like fullscreen, messages, etc. ... */}
          <li className="nav-item d-none d-lg-block full-screen-link">
            {/* ... fullscreen button ... */}
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}