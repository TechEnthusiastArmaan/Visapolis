// src/app/admin/layout.js
import Link from 'next/link';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { logout } from './actions';

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

// Self-contained helper to get the user for the layout
async function getUser() {
    const token = cookies().get('session_token')?.value;
    if (!token) return null;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        return null;
    }
}

export default async function AdminLayout({ children }) {
    const user = await getUser();

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #ddd' }}>
                
                <div>
                    <h3 style={{ marginBottom: '5px' }}>Admin Panel</h3>
                    {user && <p style={{ fontSize: '14px', color: '#555', marginBottom: '30px' }}>Logged in as {user.email}</p>}
                </div>

                <nav style={{ flexGrow: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><Link href="/admin/dashboard">Dashboard</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/admin/bookings">Bookings</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/admin/blog">Manage Blog</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link href="/admin/content/visa-details">Edit Visa Page</Link></li>

                        {/* More links can be added here */}
                    </ul>
                </nav>

                <div>
                    <form action={logout}>
                        <button type="submit" style={{ width: '100%', padding: '10px', background: 'none', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'left' }}>
                            Sign Out
                        </button>
                    </form>
                </div>
                
            </aside>
            <main style={{ flex: 1, padding: '20px', backgroundColor: '#fff' }}>
                {children}
            </main>
        </div>
    );
}