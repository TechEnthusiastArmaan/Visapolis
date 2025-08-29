// src/app/admin/settings/page.js
import Link from 'next/link';
import { getSiteSettings } from './actions';
import SettingsForm from './SettingsForm'; // We will create this next

export default async function SettingsPage() {
    // Fetch the current settings on the server
    const settings = await getSiteSettings();

    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                        <i className="mdi mdi-cog"></i>
                    </span> Site Settings
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/admin/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Settings</li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update Global Information</h4>
                            <p className="card-description">
                                Changes made here will update the contact details and social links across the entire public website.
                            </p>
                            
                            {/* Pass the settings data and server action to the client form component */}
                            <SettingsForm initialData={settings} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}