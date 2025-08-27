// src/app/admin/layout.js

// Keep all existing imports for security and layout structure
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

// Next.js components for styling injection
import Script from 'next/script';
// import Head from 'next/head'; // No need for manual Head when using route root layout metadata

import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
// import AdminFooter from './components/AdminFooter';
import DynamicBreadcrumb from './components/DynamicBreadcrumb'; 
//import './admin.css'; // Keep for custom overrides if needed

// --- LOGIC REMAINS IDENTICAL ---
async function getUser() {
    const cookieStore = cookies(); 
    const token = cookieStore.get('session_token')?.value;
    
    if (!token) return null;

    try {
        // Ensure process.env.NEXTAUTH_SECRET is defined and correct
        return jwt.verify(token, process.env.NEXTAUTH_SECRET);
    } catch (error) {
        // console.error("JWT verification failed in layout:", error.message);
        return null;
    }
}
// ---------------------------------

export default async function AdminLayout({ children }) {
    const user = await getUser();

    if (!user) {
        redirect('/login');
    }

    return (
         <html lang="en"> 
            <body>
        <div className="container-scroller">
            
            {/* CSS & Stylesheets for Purple Theme */}
            {/* NOTE: If you are serving this entire document, put external CSS in root app/layout.js head,
               or if just controlling the wrapper, rely on component-level imports/Head components. */}
            
            {/* Standard Next.js/MDI Fonts & Vendor Base CSS (Loaded from public/admin-purple) */}
            <link rel="stylesheet" href="/admin-purple/vendors/mdi/css/materialdesignicons.min.css" />
            <link rel="stylesheet" href="/admin-purple/vendors/css/vendor.bundle.base.css" />
            
            {/* Main Purple Theme CSS */}
            <link rel="stylesheet" href="/admin-purple/css/style.css" />

            
            <AdminHeader user={user} />
            
            <div className="container-fluid page-body-wrapper">
                
                {/* AdminSidebar is placed within the body-wrapper in this template structure */}
                <AdminSidebar user={user} />

                <div className="main-panel">
                    <div className="content-wrapper">
                        {/* 
                          The content-wrapper already provides nice padding.
                          We will put the dynamic breadcrumb inside it, at the top of every page.
                        */}
                        <DynamicBreadcrumb /> 
                        
                        {/* This is the main content area for the current route page */}
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    
                    {/* <AdminFooter /> */}
                </div>
            </div>
            
            {/* Core JS/jQuery Libraries */}
                <Script src="/admin-purple/vendors/js/vendor.bundle.base.js" strategy="beforeInteractive" />

            {/* Theme-Specific Utility Scripts (required for sidebar toggle, dropdowns) */}
            <Script src="/admin-purple/js/off-canvas.js" strategy="lazyOnload" />
            <Script src="/admin-purple/js/hoverable-collapse.js" strategy="lazyOnload" />
            <Script src="/admin-purple/js/misc.js" strategy="lazyOnload" />
                    <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" strategy="lazyOnload" />

        </div>
        </body>
        </html>
    );
}