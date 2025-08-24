// src/app/admin/contact-queries/page.js
import { getContactSubmissions } from '../actions'; // Import the new fetching action

export default async function ContactQueriesPage() {
    const submissions = await getContactSubmissions();

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Contact Form Submissions</h3>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Received On</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.length > 0 ? (
                            submissions.map(sub => (
                                <tr key={sub._id}>
                                    <td>{new Date(sub.createdAt).toLocaleString()}</td>
                                    <td>{sub.name}</td>
                                    <td>{sub.email}</td>
                                    <td>{sub.phone || 'N/A'}</td>
                                    {/* Using a pre-wrap to respect newlines in the message */}
                                    <td style={{ whiteSpace: 'pre-wrap', maxWidth: '400px' }}>{sub.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No submissions yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}