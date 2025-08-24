// src/app/admin/components/DynamicBreadcrumb.js
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  
  // Function to get page title and breadcrumb based on pathname
  const getPageInfo = (path) => {
    if (path === '/admin/dashboard') {
      return { title: 'Dashboard', breadcrumb: 'Dashboard' };
    } else if (path === '/admin/bookings') {
      return { title: 'Bookings', breadcrumb: 'Bookings' };
    } else if (path === '/admin/blog') {
      return { title: 'Blog Posts', breadcrumb: 'Blog Posts' };
    } else if (path === '/admin/content') {
      return { title: 'Content Management', breadcrumb: 'Content Management' };
    } else if (path === '/admin/content/visa-details') {
      return { title: 'Visa Details', breadcrumb: 'Content Management / Visa Details' };
    } else if (path.startsWith('/admin/blog/edit/')) {
      return { title: 'Edit Blog Post', breadcrumb: 'Blog Posts / Edit' };
    } else if (path === '/admin/blog/new') {
      return { title: 'New Blog Post', breadcrumb: 'Blog Posts / New' };
    }
    else if (path === '/admin/users') {
        return { title: 'Manage Users', breadcrumb: 'Users' };
      } else if (path === '/admin/users/new') {
          return { title: 'Add New User', breadcrumb: 'Users / New' };
      } else if (path.startsWith('/admin/users/edit/')) {
          return { title: 'Edit User', breadcrumb: 'Users / Edit' }; 
    }
    else {
      return { title: 'Admin Panel', breadcrumb: 'Admin' };
    }
  };

  const { title, breadcrumb } = getPageInfo(pathname);

  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link href="/admin/dashboard">Home</Link>
              </li>
              {breadcrumb !== 'Dashboard' && (
                <li className="breadcrumb-item active">{breadcrumb}</li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
