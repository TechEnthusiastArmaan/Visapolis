// src/app/admin/layout.js
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import Script from 'next/script';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import DynamicBreadcrumb from './components/DynamicBreadcrumb';

async function getUser() {
    const cookieStore = cookies(); 
    const token = cookieStore.get('session_token')?.value;
    
    if (!token) return null;
    try {
        return jwt.verify(token, process.env.NEXTAUTH_SECRET);
    } catch (error) {
        return null;
    }
}

export default async function AdminLayout({ children }) {
    const user = await getUser();
    if (!user) {
        redirect('/login');
    }

    // --- The JSX now has a complete html > head + body structure ---
    return (
        <html lang="en"> 
            <head>
                {/* All <link> tags should be placed inside the <head> */}
                <link rel="stylesheet" href="/admin-purple/vendors/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="/admin-purple/vendors/css/vendor.bundle.base.css" />
                <link rel="stylesheet" href="/admin-purple/css/style.css" />
                {/* Also good to add a title and favicon specific to the admin panel */}
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
                            {/* The AdminFooter is usually placed here, inside the main-panel but after content-wrapper */}
                        </div>
                    </div>
                </div>
                
                {/* All <Script> tags should be placed at the end of the <body> */}
                <Script src="/admin-purple/vendors/js/vendor.bundle.base.js" strategy="beforeInteractive" />
                <Script src="/admin-purple/js/off-canvas.js" strategy="lazyOnload" />
                <Script src="/admin-purple/js/hoverable-collapse.js" strategy="lazyOnload" />
                <Script src="/admin-purple/js/misc.js" strategy="lazyOnload" />
                <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}