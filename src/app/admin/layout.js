// src/app/admin/layout.js
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import Script from 'next/script';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import DynamicBreadcrumb from './components/DynamicBreadcrumb';

// --- THIS IS THE CORRECTED getUser FUNCTION ---
async function getUser() {
    const cookieStore = cookies();
    
    // 1. Get the entire cookie object first.
    const tokenCookie = cookieStore.get('session_token');

    // 2. Check if the cookie object exists. If not, the user is not logged in.
    if (!tokenCookie) {
        return null;
    }
    
    // 3. If the cookie exists, now you can safely access its value.
    try {
        return jwt.verify(tokenCookie.value, process.env.NEXTAUTH_SECRET);
    } catch (error) {
        // This will catch invalid or expired tokens
        return null;
    }
}
// ------------------------------------------

export default async function AdminLayout({ children }) {
    // This part remains the same, but it will now receive a reliable value from getUser()
    const user = await getUser();
    if (!user) {
        redirect('/login');
    }

    return (
        <html lang="en"> 
            <head>
                <link rel="stylesheet" href="/admin-purple/vendors/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="/admin-purple/vendors/css/vendor.bundle.base.css" />
                <link rel="stylesheet" href="/admin-purple/css/style.css" />
                <title>Admin Panel | Visapolis</title>
                <link rel="shortcut icon" href="/admin-purple/images/favicon.ico" />
            </head>
            <body>
                <div className="container-scroller">
                    <AdminHeader user={user} />
                    <div className="container-fluid page-body-wrapper">
                        <AdminSidebar user={user} />
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <DynamicBreadcrumb /> 
                                <div className="container-fluid">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Script src="/admin-purple/vendors/js/vendor.bundle.base.js" strategy="beforeInteractive" />
                <Script src="/admin-purple/js/off-canvas.js" strategy="lazyOnload" />
                <Script src="/admin-purple/js/hoverable-collapse.js" strategy="lazyOnload" />
                <Script src="/admin-purple/js/misc.js" strategy="lazyOnload" />
                <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}