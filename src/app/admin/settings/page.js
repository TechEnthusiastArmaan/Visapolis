import Link from 'next/link';
import { getSiteSettings } from './actions';
import SettingsForm from './SettingsForm';
import ScheduleManager from '../schedule/ScheduleManager';

export default async function SettingsPage() {
    const settings = await getSiteSettings();

    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                        <i className="mdi mdi-cog"></i>
                    </span> Site Settings
                </h3>
            </div>
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update Global Information</h4>
                            <p className="card-description">
                                Update contact details and social links for the public website.
                            </p>
                            <SettingsForm initialData={settings} />
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}