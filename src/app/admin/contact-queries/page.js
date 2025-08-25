// src/app/admin/contact-queries/page.js
import { getContactSubmissions } from '../actions';
import { deleteContactSubmission } from './actions'; // Import the new delete action
import QueriesTable from './QueriesTable';           // Import the new client component

export default async function ContactQueriesPage() {
    // This server component is now only responsible for fetching the initial data.
    const submissions = await getContactSubmissions();

    return (
        <>
            {/* The page header remains here as part of the static server-rendered layout */}
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-info text-white me-2">
                        <i className="mdi mdi-email-alert"></i>
                    </span> Contact Form Submissions
                </h3>
            </div>
            
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                             <h4 className="card-title">All Received Queries</h4>
                             <p className="card-description">
                                Here are all the messages submitted through the website&apos;s contact form.
                             </p>
                            
                            {/* 
                              This is the key change: 
                              Instead of rendering the table directly, we render the QueriesTable 
                              client component and pass the data and server action down as props.
                            */}
                            <QueriesTable 
                                initialSubmissions={submissions}
                                deleteAction={deleteContactSubmission}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}