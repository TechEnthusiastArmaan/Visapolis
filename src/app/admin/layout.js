// src/app/admin/layout.js
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import './admin.css';
import DynamicBreadcrumb from './components/DynamicBreadcrumb'; // <-- Should be imported

import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import AdminFooter from './components/AdminFooter';
import AdminLTEClient from './components/AdminLTEClient';
import AdminCSSLoader from './components/AdminCSSLoader';

async function getUser() {
    const cookieStore = cookies(); 
    const token = cookieStore.get('session_token')?.value;
    
    if (!token) return null;

    try {
        return jwt.verify(token, process.env.NEXTAUTH_SECRET);
    } catch (error) {
        console.error("JWT verification failed in layout:", error.message);
        return null;
    }
}

export default async function AdminLayout({ children }) {
    const user = await getUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <>
            <AdminCSSLoader />
            <div className="wrapper">
                <AdminHeader user={user} />
                <AdminSidebar user={user} />
               <div className="content-wrapper">
                {/* THIS IS THE UNIVERSAL HEADER FOR ALL ADMIN PAGES */}
                <DynamicBreadcrumb /> 
                
                {/* Page-specific content is rendered below the header */}
                <main className="content">
                    <div className="container-fluid">
                         {children}
                    </div>
                </main>
            </div>
                
                <AdminFooter />
                <AdminLTEClient />
            </div>
        </>
    );
}
